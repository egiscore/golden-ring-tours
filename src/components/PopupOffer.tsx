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
      <DialogContent className="sm:max-w-[400px] max-h-[90vh] overflow-y-auto p-0 border-4 border-[#D4AF37]">
        <div className="relative">
          {/* Заголовок с градиентом */}
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white p-4 pb-6">
            <div className="absolute -top-2 -right-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg rotate-12 animate-pulse">
              -30%!
            </div>
            <div className="flex items-center justify-center mb-3">
              <Icon name="Gift" size={40} />
            </div>
            <h2 className="text-2xl font-bold text-center mb-2 font-playfair">
              Стойте! Не уходите!
            </h2>
            <p className="text-center text-white/90">
              Успейте получить <span className="font-bold">скидку 30%</span> на любой тур
            </p>
          </div>

          {/* Форма */}
          <div className="p-4 bg-white">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-xl p-3 mb-4">
              <div className="flex items-start gap-3">
                <Icon name="Clock" size={24} className="text-green-600 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-bold text-green-900 mb-1">Предложение действует:</p>
                  <p className="text-green-700">Только сегодня! Оставьте заявку прямо сейчас и получите максимальную скидку</p>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">Ваше имя</label>
                <Input 
                  name="name" 
                  type="text" 
                  placeholder="Иван Иванов" 
                  className="h-12 border-gray-300 focus:border-[#D4AF37]" 
                  required 
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">Телефон</label>
                <Input 
                  name="phone" 
                  type="tel" 
                  placeholder="+7 (999) 123-45-67" 
                  className="h-12 border-gray-300 focus:border-[#D4AF37]" 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#D4AF37] text-white h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Отправка...' : 'Получить скидку 30%'}
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>

            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Icon name="Check" size={16} className="text-[#D4AF37]" />
                <span>Без спама</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Check" size={16} className="text-[#D4AF37]" />
                <span>Перезвоним за 15 минут</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}