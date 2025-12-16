import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function SocialProofSection() {
  const reviews = [
    {
      name: 'Елена Волкова',
      role: 'Турист',
      text: 'Это было невероятно! Персональный гид, комфортный автомобиль и внимание к каждой детали. Спасибо за незабываемое путешествие по Золотому кольцу!',
      rating: 5,
      date: 'Ноябрь 2024'
    },
    {
      name: 'Дмитрий Соколов',
      role: 'Турист',
      text: 'Организация на высшем уровне! Все было продумано до мелочей. Гид-историк рассказывал так интересно, что время пролетело незаметно.',
      rating: 5,
      date: 'Октябрь 2024'
    },
    {
      name: 'Мария Петрова',
      role: 'Семья с детьми',
      text: 'Путешествовали с семьей. Детям и взрослым было одинаково интересно. Особенно понравились отели — всё на высшем уровне!',
      rating: 5,
      date: 'Сентябрь 2024'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
            <Icon name="MessageSquare" size={18} className="text-[#D4AF37]" />
            <span className="text-sm font-semibold text-[#D4AF37]">Отзывы клиентов</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#1A1F2C]">Что говорят наши гости</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <strong>98% клиентов возвращаются снова</strong> или рекомендуют нас друзьям
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={18} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-[#D4AF37]" size={24} />
                </div>
                <div>
                  <div className="font-bold text-[#1A1F2C]">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.role} • {review.date}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#D4AF37]/10 via-white to-[#D4AF37]/10 rounded-3xl p-12 text-center">
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] font-playfair mb-2">4.9/5</div>
              <div className="flex items-center gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>
              <div className="text-gray-600">Средний рейтинг</div>
            </div>
            <div className="h-16 w-px bg-gray-200"></div>
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] font-playfair mb-2">500+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="h-16 w-px bg-gray-200"></div>
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] font-playfair mb-2">98%</div>
              <div className="text-gray-600">Возвращаются снова</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}