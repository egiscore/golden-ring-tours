import Icon from '@/components/ui/icon';
import TourSearchForm from './TourSearchForm';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <>
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-gradient-to-br from-[#F5F1E8] via-white to-[#F5F1E8]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-6">
                <Icon name="Sparkles" size={18} className="text-[#D4AF37]" />
                <span className="text-sm font-semibold text-[#D4AF37]">Премиум туры с 2010 года</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair leading-tight text-[#1A1F2C]">
                Путешествие,<br />о котором <span className="text-[#D4AF37]">мечтали</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
                <strong>Забудьте о массовых турах.</strong> Персональный автомобиль премиум-класса, личный гид-эксперт и программа только для вас — это Золотое кольцо без компромиссов
              </p>

              <button
                onClick={() => scrollToSection('tours')}
                className="flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-6 py-4 rounded-xl hover:shadow-xl transition-all font-semibold text-lg"
              >
                <Icon name="Search" size={20} />
                <span>Посмотреть туры</span>
              </button>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d76c9079-d4f3-492d-81f2-a1d21a0969fd.jpg"
                  alt="Золотое кольцо"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl shadow-2xl p-6 max-w-xs text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-playfair mb-1">до -30%</div>
                    <div className="text-sm text-white/90">При бронировании до конца месяца</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Форма поиска тура */}
          <TourSearchForm />

          {/* Статистика и гарантии */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <Icon name="CheckCircle" size={24} className="text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-[#1A1F2C]">Гарантия незабываемых впечатлений</strong> — 98% наших клиентов возвращаются снова или рекомендуют нас друзьям
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Icon name="Star" size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                <Icon name="Star" size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                <Icon name="Star" size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                <Icon name="Star" size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                <Icon name="Star" size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                <span className="ml-2 font-semibold">4.9 из 5</span>
                <span className="text-gray-400">• 500+ отзывов</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#D4AF37] font-playfair mb-1">14</div>
                <div className="text-sm text-gray-600">Лет на рынке</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D4AF37] font-playfair mb-1">500+</div>
                <div className="text-sm text-gray-600">Счастливых гостей</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D4AF37] font-playfair mb-1">100%</div>
                <div className="text-sm text-gray-600">Индивидуально</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Car', title: 'Премиум авто', desc: 'Mercedes, BMW, Audi' },
              { icon: 'User', title: 'Личный гид', desc: 'Эксперт-историк' },
              { icon: 'Hotel', title: 'Отели 5★', desc: 'Лучшие гостиницы' },
              { icon: 'Shield', title: 'Гарантия', desc: 'Полная страховка' }
            ].map((feature, i) => (
              <div key={i} className="text-center animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-2xl mb-4">
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}