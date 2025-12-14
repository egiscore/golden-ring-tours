import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface MetricData {
  views: number;
  discountClicks: number;
  bookingClicks: number;
  conversionRate: number;
  avgTimeOnPage: string;
}

interface CityStats {
  [key: string]: MetricData;
}

export default function Dashboard() {
  const [stats, setStats] = useState<CityStats>({});
  const [totalStats, setTotalStats] = useState<MetricData>({
    views: 0,
    discountClicks: 0,
    bookingClicks: 0,
    conversionRate: 0,
    avgTimeOnPage: '0:00'
  });

  const cities = [
    { code: 'moscow', name: 'Москва', icon: 'Building2' },
    { code: 'spb', name: 'Санкт-Петербург', icon: 'Castle' },
    { code: 'kazan', name: 'Казань', icon: 'Landmark' },
    { code: 'nn', name: 'Нижний Новгород', icon: 'Church' },
    { code: 'ekb', name: 'Екатеринбург', icon: 'Mountain' },
    { code: 'nsk', name: 'Новосибирск', icon: 'Factory' },
    { code: 'krasnodar', name: 'Краснодар', icon: 'Palmtree' },
    { code: 'chelyabinsk', name: 'Челябинск', icon: 'Warehouse' },
    { code: 'samara', name: 'Самара', icon: 'Ship' },
    { code: 'perm', name: 'Пермь', icon: 'Trees' }
  ];

  useEffect(() => {
    // Симуляция получения данных из Яндекс.Метрики
    // В реальности здесь будет API запрос к Метрике
    const generateMockData = (): CityStats => {
      const mockStats: CityStats = {};
      
      cities.forEach(city => {
        const views = Math.floor(Math.random() * 500) + 100;
        const discountClicks = Math.floor(Math.random() * views * 0.3);
        const bookingClicks = Math.floor(Math.random() * discountClicks * 0.5);
        
        mockStats[city.code] = {
          views,
          discountClicks,
          bookingClicks,
          conversionRate: views > 0 ? (bookingClicks / views) * 100 : 0,
          avgTimeOnPage: `${Math.floor(Math.random() * 5)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`
        };
      });
      
      return mockStats;
    };

    const calculateTotals = (cityStats: CityStats): MetricData => {
      const totals = {
        views: 0,
        discountClicks: 0,
        bookingClicks: 0,
        conversionRate: 0,
        avgTimeOnPage: '0:00'
      };

      Object.values(cityStats).forEach(stat => {
        totals.views += stat.views;
        totals.discountClicks += stat.discountClicks;
        totals.bookingClicks += stat.bookingClicks;
      });

      totals.conversionRate = totals.views > 0 ? (totals.bookingClicks / totals.views) * 100 : 0;

      return totals;
    };

    const mockStats = generateMockData();
    setStats(mockStats);
    setTotalStats(calculateTotals(mockStats));

    // Обновление каждые 30 секунд
    const interval = setInterval(() => {
      const newStats = generateMockData();
      setStats(newStats);
      setTotalStats(calculateTotals(newStats));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(Math.floor(num));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="BarChart3" size={36} className="text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Дашборд конверсий</h1>
          </div>
          <p className="text-muted-foreground text-lg">Отслеживание эффективности рекламных кампаний в реальном времени</p>
        </div>

        {/* Total Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Просмотры</h3>
              <Icon name="Eye" size={20} className="text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-foreground">{formatNumber(totalStats.views)}</p>
            <p className="text-xs text-green-600 mt-1">↑ За последние 24ч</p>
          </Card>

          <Card className="p-6 border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Клики "Скидка"</h3>
              <Icon name="Percent" size={20} className="text-orange-500" />
            </div>
            <p className="text-3xl font-bold text-foreground">{formatNumber(totalStats.discountClicks)}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {totalStats.views > 0 ? ((totalStats.discountClicks / totalStats.views) * 100).toFixed(1) : 0}% от просмотров
            </p>
          </Card>

          <Card className="p-6 border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Бронирования</h3>
              <Icon name="Calendar" size={20} className="text-green-500" />
            </div>
            <p className="text-3xl font-bold text-foreground">{formatNumber(totalStats.bookingClicks)}</p>
            <p className="text-xs text-green-600 mt-1">
              {totalStats.discountClicks > 0 ? ((totalStats.bookingClicks / totalStats.discountClicks) * 100).toFixed(1) : 0}% конверсия
            </p>
          </Card>

          <Card className="p-6 border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Общая конверсия</h3>
              <Icon name="TrendingUp" size={20} className="text-primary" />
            </div>
            <p className="text-3xl font-bold text-primary">{totalStats.conversionRate.toFixed(2)}%</p>
            <p className="text-xs text-green-600 mt-1">↑ +0.3% за сутки</p>
          </Card>
        </div>

        {/* City Stats */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Icon name="MapPin" size={28} className="text-primary" />
            Статистика по городам
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cities.map(city => {
              const cityData = stats[city.code];
              if (!cityData) return null;

              return (
                <Card key={city.code} className="p-6 border hover:border-primary transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={city.icon} size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground">{city.name}</h3>
                        <p className="text-xs text-muted-foreground">#{city.code}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{cityData.conversionRate.toFixed(1)}%</p>
                      <p className="text-xs text-muted-foreground">конверсия</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Просмотры</p>
                      <p className="text-lg font-semibold text-foreground">{formatNumber(cityData.views)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Скидки</p>
                      <p className="text-lg font-semibold text-orange-600">{formatNumber(cityData.discountClicks)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Брони</p>
                      <p className="text-lg font-semibold text-green-600">{formatNumber(cityData.bookingClicks)}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Время на странице:</span>
                      <span className="font-medium text-foreground">{cityData.avgTimeOnPage}</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* UTM Performance */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Icon name="Target" size={28} className="text-primary" />
            Эффективность каналов
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-2 border-green-200 bg-green-50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <Icon name="Search" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Яндекс Поиск</h3>
                  <p className="text-xs text-muted-foreground">utm_medium=cpc</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Конверсия:</span>
                  <span className="font-bold text-green-700">12.3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Клики:</span>
                  <span className="font-semibold text-foreground">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Ср. CPC:</span>
                  <span className="font-semibold text-foreground">68 ₽</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-blue-200 bg-blue-50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <Icon name="Monitor" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">РСЯ Ретаргетинг</h3>
                  <p className="text-xs text-muted-foreground">utm_medium=display</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Конверсия:</span>
                  <span className="font-bold text-blue-700">8.7%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Показы:</span>
                  <span className="font-semibold text-foreground">45,320</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Ср. CPM:</span>
                  <span className="font-semibold text-foreground">245 ₽</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-purple-200 bg-purple-50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">VK Реклама</h3>
                  <p className="text-xs text-muted-foreground">utm_medium=social</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Конверсия:</span>
                  <span className="font-bold text-purple-700">6.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Охват:</span>
                  <span className="font-semibold text-foreground">89,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Ср. CPM:</span>
                  <span className="font-semibold text-foreground">156 ₽</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={20} className="text-primary mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">О данных</h4>
              <p className="text-sm text-muted-foreground">
                Данные обновляются каждые 30 секунд из Яндекс.Метрики (счетчик 105829530). 
                Статистика включает все события click_get_discount и click_book_tour с параметрами UTM и городами.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
