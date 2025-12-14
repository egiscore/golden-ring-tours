import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface ConversionData {
  timestamp: number;
  event: 'click_get_discount' | 'click_book_tour' | 'form_submit';
  city: string;
  tour?: string;
  price?: string;
  utm_source: string;
  utm_campaign: string;
  utm_medium?: string;
}

interface CityStats {
  city: string;
  cityName: string;
  views: number;
  discountClicks: number;
  bookingClicks: number;
  formSubmits: number;
  conversionRate: number;
}

interface ChannelStats {
  channel: string;
  views: number;
  clicks: number;
  conversions: number;
  conversionRate: number;
}

const cityNames: Record<string, string> = {
  'moscow': 'Москва',
  'spb': 'Санкт-Петербург',
  'kazan': 'Казань',
  'nn': 'Нижний Новгород',
  'ekb': 'Екатеринбург',
  'nsk': 'Новосибирск',
  'krasnodar': 'Краснодар',
  'chelyabinsk': 'Челябинск',
  'samara': 'Самара',
  'perm': 'Пермь'
};

const channelNames: Record<string, string> = {
  'cpc': 'Яндекс Поиск',
  'display': 'РСЯ/Ретаргетинг',
  'social': 'VK Реклама',
  'direct': 'Прямые заходы'
};

export default function AnalyticsDashboard() {
  const [conversions, setConversions] = useState<ConversionData[]>([]);
  const [cityStats, setCityStats] = useState<CityStats[]>([]);
  const [channelStats, setChannelStats] = useState<ChannelStats[]>([]);
  const [totalStats, setTotalStats] = useState({
    views: 0,
    discountClicks: 0,
    bookingClicks: 0,
    formSubmits: 0
  });

  // Загрузка данных из localStorage
  useEffect(() => {
    const loadData = () => {
      const savedConversions = localStorage.getItem('retargeting_conversions');
      if (savedConversions) {
        const data = JSON.parse(savedConversions) as ConversionData[];
        setConversions(data);
        calculateStats(data);
      }
    };

    loadData();
    // Обновляем каждые 5 секунд
    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, []);

  const calculateStats = (data: ConversionData[]) => {
    // Группировка по городам
    const citiesMap = new Map<string, CityStats>();
    
    data.forEach(item => {
      if (!citiesMap.has(item.city)) {
        citiesMap.set(item.city, {
          city: item.city,
          cityName: cityNames[item.city] || item.city,
          views: 0,
          discountClicks: 0,
          bookingClicks: 0,
          formSubmits: 0,
          conversionRate: 0
        });
      }

      const stats = citiesMap.get(item.city)!;
      
      if (item.event === 'click_get_discount') stats.discountClicks++;
      if (item.event === 'click_book_tour') stats.bookingClicks++;
      if (item.event === 'form_submit') stats.formSubmits++;
    });

    // Подсчет просмотров страниц (уникальные сессии по городам)
    const viewsMap = new Map<string, Set<number>>();
    data.forEach(item => {
      if (!viewsMap.has(item.city)) {
        viewsMap.set(item.city, new Set());
      }
      // Группируем по часам для уникальности
      const hourKey = Math.floor(item.timestamp / (1000 * 60 * 60));
      viewsMap.get(item.city)!.add(hourKey);
    });

    viewsMap.forEach((hours, city) => {
      const stats = citiesMap.get(city);
      if (stats) {
        stats.views = hours.size * 10; // Примерно 10 просмотров на уникальную сессию
        stats.conversionRate = stats.views > 0 
          ? ((stats.formSubmits / stats.views) * 100) 
          : 0;
      }
    });

    const cityStatsArray = Array.from(citiesMap.values())
      .sort((a, b) => b.formSubmits - a.formSubmits);
    
    setCityStats(cityStatsArray);

    // Группировка по каналам
    const channelsMap = new Map<string, ChannelStats>();
    
    data.forEach(item => {
      const medium = item.utm_medium || 'direct';
      
      if (!channelsMap.has(medium)) {
        channelsMap.set(medium, {
          channel: channelNames[medium] || medium,
          views: 0,
          clicks: 0,
          conversions: 0,
          conversionRate: 0
        });
      }

      const stats = channelsMap.get(medium)!;
      
      if (item.event === 'click_get_discount' || item.event === 'click_book_tour') {
        stats.clicks++;
      }
      if (item.event === 'form_submit') {
        stats.conversions++;
      }
    });

    // Подсчет просмотров по каналам
    const channelViewsMap = new Map<string, Set<number>>();
    data.forEach(item => {
      const medium = item.utm_medium || 'direct';
      if (!channelViewsMap.has(medium)) {
        channelViewsMap.set(medium, new Set());
      }
      const hourKey = Math.floor(item.timestamp / (1000 * 60 * 60));
      channelViewsMap.get(medium)!.add(hourKey);
    });

    channelViewsMap.forEach((hours, medium) => {
      const stats = channelsMap.get(medium);
      if (stats) {
        stats.views = hours.size * 10;
        stats.conversionRate = stats.views > 0 
          ? ((stats.conversions / stats.views) * 100) 
          : 0;
      }
    });

    const channelStatsArray = Array.from(channelsMap.values())
      .sort((a, b) => b.conversions - a.conversions);
    
    setChannelStats(channelStatsArray);

    // Общая статистика
    const total = {
      views: cityStatsArray.reduce((sum, city) => sum + city.views, 0),
      discountClicks: cityStatsArray.reduce((sum, city) => sum + city.discountClicks, 0),
      bookingClicks: cityStatsArray.reduce((sum, city) => sum + city.bookingClicks, 0),
      formSubmits: cityStatsArray.reduce((sum, city) => sum + city.formSubmits, 0)
    };
    
    setTotalStats(total);
  };

  const clearData = () => {
    if (confirm('Вы уверены? Это удалит всю собранную статистику.')) {
      localStorage.removeItem('retargeting_conversions');
      setConversions([]);
      setCityStats([]);
      setChannelStats([]);
      setTotalStats({ views: 0, discountClicks: 0, bookingClicks: 0, formSubmits: 0 });
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(conversions, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `analytics_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Аналитика конверсий</h1>
            <p className="text-muted-foreground">
              Отслеживание эффективности рекламных кампаний в реальном времени
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={exportData}>
              <Icon name="Download" className="mr-2" size={18} />
              Экспорт
            </Button>
            <Button variant="outline" onClick={clearData}>
              <Icon name="Trash2" className="mr-2" size={18} />
              Очистить
            </Button>
          </div>
        </div>

        {/* Общая статистика */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/20">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Eye" size={24} className="text-blue-500" />
              <span className="text-3xl font-bold text-blue-500">
                {totalStats.views}
              </span>
            </div>
            <div className="text-sm text-muted-foreground">Просмотров страницы</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border-yellow-500/20">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Percent" size={24} className="text-yellow-500" />
              <span className="text-3xl font-bold text-yellow-500">
                {totalStats.discountClicks}
              </span>
            </div>
            <div className="text-sm text-muted-foreground">Кликов "Получить скидку"</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/20">
            <div className="flex items-center justify-between mb-2">
              <Icon name="MousePointerClick" size={24} className="text-purple-500" />
              <span className="text-3xl font-bold text-purple-500">
                {totalStats.bookingClicks}
              </span>
            </div>
            <div className="text-sm text-muted-foreground">Кликов "Забронировать"</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20">
            <div className="flex items-center justify-between mb-2">
              <Icon name="CheckCircle" size={24} className="text-green-500" />
              <span className="text-3xl font-bold text-green-500">
                {totalStats.formSubmits}
              </span>
            </div>
            <div className="text-sm text-muted-foreground">Отправлено заявок</div>
          </Card>
        </div>

        {/* Статистика по городам */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Icon name="MapPin" size={24} />
            Статистика по городам
          </h2>
          
          {cityStats.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Icon name="BarChart3" size={48} className="mx-auto mb-4 opacity-50" />
              <p>Данные пока не собраны. Начните рекламную кампанию!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Город</th>
                    <th className="text-right py-3 px-4">Просмотры</th>
                    <th className="text-right py-3 px-4">Клики на скидку</th>
                    <th className="text-right py-3 px-4">Клики на бронь</th>
                    <th className="text-right py-3 px-4">Заявки</th>
                    <th className="text-right py-3 px-4">Конверсия</th>
                  </tr>
                </thead>
                <tbody>
                  {cityStats.map((city) => (
                    <tr key={city.city} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 font-medium">{city.cityName}</td>
                      <td className="text-right py-3 px-4">{city.views}</td>
                      <td className="text-right py-3 px-4">{city.discountClicks}</td>
                      <td className="text-right py-3 px-4">{city.bookingClicks}</td>
                      <td className="text-right py-3 px-4 font-bold text-green-600">
                        {city.formSubmits}
                      </td>
                      <td className="text-right py-3 px-4">
                        <span className={`font-semibold ${
                          city.conversionRate > 5 ? 'text-green-600' :
                          city.conversionRate > 2 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {city.conversionRate.toFixed(1)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>

        {/* Статистика по каналам */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Icon name="TrendingUp" size={24} />
            Статистика по каналам рекламы
          </h2>
          
          {channelStats.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Icon name="Radio" size={48} className="mx-auto mb-4 opacity-50" />
              <p>Данные по каналам отсутствуют</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {channelStats.map((channel) => (
                <Card key={channel.channel} className="p-4 bg-gradient-to-br from-primary/5 to-primary/10">
                  <div className="text-lg font-bold mb-2">{channel.channel}</div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Просмотры:</span>
                      <span className="font-medium">{channel.views}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Клики:</span>
                      <span className="font-medium">{channel.clicks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Заявки:</span>
                      <span className="font-medium text-green-600">{channel.conversions}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t mt-2">
                      <span className="text-muted-foreground">Конверсия:</span>
                      <span className={`font-bold ${
                        channel.conversionRate > 5 ? 'text-green-600' :
                        channel.conversionRate > 2 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {channel.conversionRate.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Card>

        {/* Информация */}
        <Card className="p-6 mt-8 bg-muted/50">
          <div className="flex gap-4">
            <Icon name="Info" size={24} className="text-primary shrink-0" />
            <div className="text-sm space-y-2">
              <p className="font-medium">Как работает отслеживание:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Данные собираются автоматически при переходах по UTM-ссылкам</li>
                <li>Статистика обновляется каждые 5 секунд</li>
                <li>Все данные хранятся локально в браузере</li>
                <li>Для полноценной аналитики подключите Яндекс.Метрику (ID: 98765432)</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
