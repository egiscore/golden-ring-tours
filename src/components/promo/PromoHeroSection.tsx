import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface PromoHeroSectionProps {
  userCity: string;
  cityTargeting: Record<string, {
    city: string;
    offer: string;
    benefit: string;
    transport: string;
    icon: string;
  }>;
  timeLeft: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  utmParams: {
    source: string;
    medium: string;
    campaign: string;
    content: string;
    term: string;
  };
  onBookingClick: (tourTitle?: string) => void;
}

export default function PromoHeroSection({
  userCity,
  cityTargeting,
  timeLeft,
  utmParams,
  onBookingClick
}: PromoHeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/dc11c82c-f1f7-4790-a687-b4eded4a846e.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Icon name="Church" size={40} className="text-[#D4AF37]" />
            <h2 className="text-3xl font-bold text-[#1A1F2C]">Золотое Кольцо</h2>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border-2 border-[#D4AF37] px-6 py-3 rounded-full mb-6 animate-pulse">
            <Icon name="Sparkles" size={20} className="text-[#D4AF37]" />
            <span className="font-semibold text-[#1A1F2C]">Специальное предложение</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] via-[#B8941F] to-[#D4AF37] bg-clip-text text-transparent">
            Скидка 5%<br />на туры по Золотому Кольцу
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-2xl mx-auto">
            Откройте для себя древние города России в комфортабельном туре
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Владимир • Суздаль • Ярославль • Ростов Великий • Кострома • Иваново • Сергиев Посад • Переславль-Залесский
          </p>

          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 mb-8 max-w-md mx-auto">
            <p className="text-sm text-muted-foreground mb-4">Предложение действует:</p>
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-muted-foreground mt-1">часов</div>
              </div>
              <div className="text-4xl font-bold text-primary">:</div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-muted-foreground mt-1">минут</div>
              </div>
              <div className="text-4xl font-bold text-primary">:</div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-muted-foreground mt-1">секунд</div>
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="text-lg px-12 py-6 h-auto shadow-xl hover:scale-105 transition-transform"
            onClick={() => {
              onBookingClick('');
            }}
          >
            <Icon name="Percent" className="mr-2" size={24} />
            Получить скидку 5%
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            🔥 Уже 127 человек воспользовались предложением сегодня
          </p>
        </div>
      </div>
    </section>
  );
}