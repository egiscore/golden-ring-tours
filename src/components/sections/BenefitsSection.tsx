import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: 'Shield',
      title: 'Гарантия возврата',
      description: 'Вернём 100% стоимости, если тур не оправдает ожидания',
      accent: 'Полная защита'
    },
    {
      icon: 'Clock',
      title: 'Без переплат',
      description: 'Фиксированная цена без скрытых комиссий и доплат',
      accent: 'Прозрачность'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Личный менеджер на связи в любое время суток',
      accent: 'Всегда на связи'
    },
    {
      icon: 'Award',
      title: 'Лицензия и страховка',
      description: 'Официальный туроператор с полным страхованием',
      accent: 'Безопасность'
    },
    {
      icon: 'Sparkles',
      title: 'VIP-сервис',
      description: 'Mercedes S-Class, отели 5★, персональный гид',
      accent: 'Премиум класс'
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Программа создаётся под ваши интересы и пожелания',
      accent: 'Только для вас'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F5F1E8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
            <Icon name="CheckCircle" size={18} className="text-[#D4AF37]" />
            <span className="text-sm font-semibold text-[#D4AF37]">Почему мы</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#1A1F2C]">Ваши гарантии</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <strong>Мы несём полную ответственность</strong> за качество каждого тура
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group p-6 border-0 shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon name={benefit.icon} className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <div className="inline-block text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded mb-2">
                    {benefit.accent}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#1A1F2C] font-playfair">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#1A1F2C] to-[#2A2F3C] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Icon name="TrendingUp" size={18} className="text-[#D4AF37]" />
              <span className="text-sm font-semibold text-[#D4AF37]">Специальное предложение</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Скидка 30% при бронировании до конца месяца</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Успейте забронировать тур по специальной цене. Количество мест ограничено!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <div className="text-sm text-gray-300 mb-1">Осталось мест</div>
                <div className="text-2xl font-bold text-[#D4AF37]">7</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <div className="text-sm text-gray-300 mb-1">До конца акции</div>
                <div className="text-2xl font-bold text-[#D4AF37]">18 дней</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
