import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let hasShown = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (
        !hasShown &&
        e.clientY <= 0 &&
        !sessionStorage.getItem('exit_popup_shown')
      ) {
        setIsOpen(true);
        hasShown = true;
        sessionStorage.setItem('exit_popup_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || 'direct';
    const utmMedium = urlParams.get('utm_medium') || '';
    const utmCampaign = urlParams.get('utm_campaign') || '';
    
    let sourceInfo = `📍 Источник: Exit Intent popup\n🎯 Канал: ${utmSource}`;
    if (utmMedium) sourceInfo += ` / ${utmMedium}`;
    if (utmCampaign) sourceInfo += `\n📢 Кампания: ${utmCampaign}`;
    
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: null,
      message: `${sourceInfo}\n\n💬 Сообщение: Заявка из Exit Intent окна (последний шанс)`
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
        event: 'exit_intent_submit',
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
        (window as any).ym(105829530, 'reachGoal', 'exit_intent_submit', eventData);
      }

      toast({
        title: '✅ Спасибо!',
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
      <DialogContent className="sm:max-w-[420px] max-h-[90vh] overflow-y-auto p-0 border-4 border-red-500">
        <div className="relative">
          {/* Яркий заголовок */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-4 pb-6">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-red-600 px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
              ⚡ ПОСЛЕДНИЙ ШАНС!
            </div>
            <div className="flex items-center justify-center mb-3 mt-4">
              <Icon name="AlertCircle" size={48} />
            </div>
            <h2 className="text-2xl font-bold text-center mb-2 font-playfair">
              Стоп! Не уходите!
            </h2>
            <p className="text-center text-white/95 text-base">
              Только для вас — <span className="font-bold text-yellow-300">эксклюзивная скидка 30%</span>
            </p>
          </div>

          {/* Форма */}
          <div className="p-4 bg-white">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-xl p-3 mb-4">
              <div className="flex items-start gap-3">
                <Icon name="Zap" size={28} className="text-yellow-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-yellow-900 mb-2">Что вы получите прямо сейчас:</p>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-yellow-600" />
                      <span>Скидка 30% на любой тур</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-yellow-600" />
                      <span>Бесплатная консультация эксперта</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-yellow-600" />
                      <span>Персональная программа тура в подарок</span>
                    </li>
                  </ul>
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
                  className="h-12 border-gray-300 focus:border-red-500" 
                  required 
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">Телефон</label>
                <Input 
                  name="phone" 
                  type="tel" 
                  placeholder="+7 (999) 123-45-67" 
                  className="h-12 border-gray-300 focus:border-red-500" 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Отправка...' : '🔥 Забрать скидку 30% сейчас!'}
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Предложение действует только сегодня
              </p>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                <Icon name="Users" size={16} className="text-[#D4AF37]" />
                <span><span className="font-bold text-red-600">47 человек</span> воспользовались предложением сегодня</span>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}