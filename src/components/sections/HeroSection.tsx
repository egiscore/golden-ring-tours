import Icon from '@/components/ui/icon';
import TourSearchForm from './TourSearchForm';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <>
      <section className="relative pt-16 sm:pt-20 pb-24 sm:pb-32 md:pb-40 overflow-hidden bg-gradient-to-br from-[#F5F1E8] via-white to-[#F5F1E8]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 font-playfair leading-tight text-[#1A1F2C]">
                Туры по <span className="text-[#D4AF37]">Золотому кольцу</span> России
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-700 leading-relaxed">
                <strong>Забудьте о массовых турах.</strong> Комфортный автомобиль, опытный гид и индивидуальная программа — откройте для себя Золотое кольцо России
              </p>

              <button
                onClick={() => scrollToSection('tours')}
                className="flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl hover:shadow-xl transition-all font-semibold text-base sm:text-lg"
              >
                <Icon name="Search" size={18} className="sm:w-5 sm:h-5" />
                <span>Посмотреть все туры</span>
              </button>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d76c9079-d4f3-492d-81f2-a1d21a0969fd.jpg"
                  alt="Золотое кольцо"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Форма поиска тура */}
          <TourSearchForm />

          {/* Статистика и гарантии */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="bg-white/80 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Icon name="CheckCircle" size={20} className="text-[#D4AF37] flex-shrink-0 mt-1 sm:w-6 sm:h-6" />
                <div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    <strong className="text-[#1A1F2C]">Гарантия незабываемых впечатлений</strong> — 98% наших клиентов возвращаются снова или рекомендуют нас друзьям
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                <Icon name="Star" size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                <Icon name="Star" size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                <Icon name="Star" size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                <Icon name="Star" size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                <Icon name="Star" size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                <span className="ml-2 font-semibold">4.9 из 5</span>
                <span className="text-gray-400">• 500+ отзывов</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] font-playfair mb-1">14</div>
                <div className="text-xs sm:text-sm text-gray-600">Лет на рынке</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] font-playfair mb-1">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Счастливых гостей</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] font-playfair mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Индивидуально</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: 'Car', title: 'Комфортный транспорт', desc: 'Удобные автомобили' },
              { icon: 'User', title: 'Опытный гид', desc: 'Знающий историк' },
              { icon: 'Hotel', title: 'Хорошие отели', desc: 'Проверенные гостиницы' },
              { icon: 'Shield', title: 'Гарантия', desc: 'Полная страховка' }
            ].map((feature, i) => (
              <div key={i} className="text-center animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#D4AF37] rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                  <Icon name={feature.icon} size={24} className="text-white sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}