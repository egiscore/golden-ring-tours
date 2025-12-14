import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function CallbackButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || 'direct';
    const utmMedium = urlParams.get('utm_medium') || '';
    const utmCampaign = urlParams.get('utm_campaign') || '';
    
    let sourceInfo = `📍 Источник: Кнопка обратного звонка\n🎯 Канал: ${utmSource}`;
    if (utmMedium) sourceInfo += ` / ${utmMedium}`;
    if (utmCampaign) sourceInfo += `\n📢 Кампания: ${utmCampaign}`;
    
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: null,
      message: `${sourceInfo}\n\n💬 Сообщение: Запрос обратного звонка`
    };

    try {
      const response = await fetch('https://functions.poehali.dev/eb6d500d-ad4a-455e-a440-a45f5a6c98d3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Ошибка отправки');
      }

      const eventData = {
        timestamp: Date.now(),
        event: 'callback_request',
        city: 'unknown',
        utm_source: utmSource,
        utm_campaign: utmCampaign || 'none',
        utm_medium: utmMedium || 'website'
      };

      const saved = localStorage.getItem('retargeting_conversions');
      const conversions = saved ? JSON.parse(saved) : [];
      conversions.push(eventData);
      localStorage.setItem('retargeting_conversions', JSON.stringify(conversions));

      if (typeof window !== 'undefined' && (window as any).ym) {
        (window as any).ym(105829530, 'reachGoal', 'callback_request', eventData);
      }

      toast({
        title: '✅ Заявка принята!',
        description: 'Перезвоним вам в течение 5 минут',
        duration: 5000,
      });

      setIsOpen(false);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: '❌ Ошибка',
        description: 'Позвоните нам: +7 (495) 179-74-44',
        variant: 'destructive',
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Плавающая кнопка */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Заказать обратный звонок"
      >
        <div className="relative">
          {/* Анимированные кольца */}
          <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-pulse"></div>
          
          {/* Основная кнопка */}
          <div className="relative w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon name="Phone" size={28} className="text-white" />
          </div>
          
          {/* Текст подсказки */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#1A1F2C] text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="font-semibold">Обратный звонок</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-[#1A1F2C] rotate-45"></div>
          </div>
        </div>
      </button>

      {/* Модальное окно */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[380px]">
          <div className="text-center mb-3">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D4AF37]/10 rounded-full mb-2">
              <Icon name="PhoneCall" size={24} className="text-[#D4AF37]" />
            </div>
            <h2 className="text-lg font-bold mb-1 font-playfair text-[#1A1F2C]">
              Обратный звонок
            </h2>
            <p className="text-sm text-gray-600">
              Перезвоним за <span className="font-bold text-[#D4AF37]">5 минут</span>
            </p>
          </div>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs font-semibold mb-1 block text-[#1A1F2C]">Ваше имя</label>
              <Input 
                name="name" 
                type="text" 
                placeholder="Иван" 
                className="h-10 text-sm border-gray-300 focus:border-[#D4AF37]" 
                required 
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 block text-[#1A1F2C]">Телефон</label>
              <Input 
                name="phone" 
                type="tel" 
                placeholder="+7 (999) 123-45-67" 
                className="h-10 text-sm border-gray-300 focus:border-[#D4AF37]" 
                required 
              />
            </div>


            
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#D4AF37] text-white h-10 text-sm font-semibold transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Отправка...' : 'Перезвоните мне'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}