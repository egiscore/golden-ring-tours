import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <>
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-gradient-to-br from-[#F5F1E8] via-white to-[#F5F1E8]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-6">
                <Icon name="Sparkles" size={18} className="text-[#D4AF37]" />
                <span className="text-sm font-semibold text-[#D4AF37]">Премиум туры с 2010 года</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair leading-tight text-[#1A1F2C]">
                Золотое кольцо<br />
                <span className="text-[#D4AF37]">в стиле VIP</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
                Откройте величие древних русских городов на автомобиле премиум-класса с персональным гидом-экспертом
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button onClick={() => scrollToSection('tours')} size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-white text-lg px-8 h-14 font-semibold shadow-lg hover:shadow-xl transition-all">
                  Подобрать тур
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white text-lg px-8 h-14 font-semibold">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#D4AF37] font-playfair mb-1">500+</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D4AF37] font-playfair mb-1">14</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D4AF37] font-playfair mb-1">100%</div>
                  <div className="text-sm text-gray-600">Индивидуально</div>
                </div>
              </div>
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
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-[#1A1F2C]">Лучшее качество</div>
                    <div className="text-sm text-gray-600">Рейтинг 4.9 из 5</div>
                  </div>
                </div>
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
