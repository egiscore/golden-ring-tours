import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function PopupOffer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('popup_offer_shown');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('popup_offer_shown', 'true');
      }, 30000); // 30 секунд

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || 'direct';
    const utmMedium = urlParams.get('utm_medium') || '';
    const utmCampaign = urlParams.get('utm_campaign') || '';
    
    let sourceInfo = `📍 Источник: Popup окно (30 сек)\n🎯 Канал: ${utmSource}`;
    if (utmMedium) sourceInfo += ` / ${utmMedium}`;
    if (utmCampaign) sourceInfo += `\n📢 Кампания: ${utmCampaign}`;
    
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: null,
      message: `${sourceInfo}\n\n💬 Сообщение: Заявка из всплывающего окна со скидкой`
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
        event: 'popup_submit',
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
        (window as any).ym(105829530, 'reachGoal', 'popup_submit', eventData);
      }

      toast({
        title: '✅ Отлично!',
        description: 'Мы перезвоним вам в течение 15 минут',
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[380px] p-0 border-2 border-[#D4AF37]">
        <div className="relative">
          {/* Заголовок с градиентом */}
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white p-3 pb-4">
            <div className="flex items-center justify-center mb-2">
              <Icon name="Gift" size={32} />
            </div>
            <h2 className="text-xl font-bold text-center mb-1 font-playfair">
              Специальное предложение
            </h2>
            <p className="text-center text-white/95 text-sm">
              Скидка <span className="font-bold">30%</span> на любой тур
            </p>
          </div>

          {/* Форма */}
          <div className="p-4 bg-white">
            <div className="bg-green-50 border border-green-400 rounded-lg p-2 mb-3">
              <p className="text-xs text-green-900 font-semibold">⌛ Предложение действует только сегодня</p>
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
                {isSubmitting ? 'Отправка...' : 'Получить скидку'}
              </Button>
            </form>


          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}