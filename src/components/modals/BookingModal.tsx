import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair">Забронировать тур со скидкой 5%</DialogTitle>
          <DialogDescription>
            Оставьте заявку, и мы свяжемся с вами в течение часа
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Ваше имя</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" 
              placeholder="Иван Иванов" 
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Телефон</label>
            <input 
              type="tel" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" 
              placeholder="+7 (999) 123-45-67" 
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" 
              placeholder="email@example.com" 
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Интересующий тур</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
              <option>Индивидуальный VIP тур</option>
              <option>Гастрономический тур</option>
              <option>Фототур для профессионалов</option>
              <option>Духовное путешествие</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Комментарий</label>
            <textarea 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] min-h-[100px]" 
              placeholder="Расскажите о ваших пожеланиях..." 
            />
          </div>
          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-lg p-4">
            <p className="text-sm text-center font-medium">
              🎉 Ваша персональная скидка <span className="text-[#D4AF37] font-bold">5%</span> будет применена автоматически
            </p>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white h-12"
          >
            Отправить заявку
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
