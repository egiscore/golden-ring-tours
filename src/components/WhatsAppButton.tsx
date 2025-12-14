import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-fade-in">
      <a
        href="https://wa.me/74951797444?text=Здравствуйте!%20Интересуют%20туры%20по%20Золотому%20Кольцу"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).ym) {
            (window as any).ym(105829530, 'reachGoal', 'click_whatsapp', {
              page: window.location.pathname
            });
          }
        }}
      >
        <div className="absolute -top-2 -left-2 w-16 h-16 bg-green-400 rounded-full animate-ping opacity-20"></div>
        
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <Icon name="MessageCircle" size={32} className="text-white" />
        </div>

        <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          <p className="text-sm font-semibold text-gray-800">Напишите нам в WhatsApp</p>
          <p className="text-xs text-gray-600">Ответим за 2 минуты</p>
        </div>
      </a>

      <button
        onClick={() => setIsVisible(false)}
        className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
      >
        Скрыть
      </button>
    </div>
  );
}
