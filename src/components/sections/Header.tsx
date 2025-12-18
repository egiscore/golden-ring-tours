import Icon from "@/components/ui/icon";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-2">
        <div 
          className="flex items-center gap-2 sm:gap-3 cursor-pointer min-w-0" 
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              navigate('/');
            }
          }}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center shrink-0">
            <Icon name="Crown" className="text-white" size={16} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-lg sm:text-xl md:text-2xl text-[#1A1F2C] font-playfair leading-tight font-semibold whitespace-nowrap">Ви Эф Эс</span>
            <span className="text-[10px] sm:text-xs text-gray-600 font-medium whitespace-nowrap">
              Туроператор
            </span>
          </div>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection("tours")}
            className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium"
          >
            Туры
          </button>
          <button
            onClick={() => scrollToSection("routes")}
            className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium"
          >
            Маршруты
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium"
          >
            Галерея
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium"
          >
            Контакты
          </button>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="tel:+74951797444"
            className="hidden lg:flex items-center gap-2 text-[#D4AF37] hover:text-[#B8941F] transition-colors font-semibold whitespace-nowrap"
          >
            <Icon name="Phone" size={18} />
            <span>8 (800) 700-34-98</span>
          </a>
          
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href="tel:+74951797444"
              className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#D4AF37] hover:bg-[#B8941F] text-white rounded-full transition-all shadow-sm hover:shadow-md"
              title="Позвонить"
            >
              <Icon name="Phone" size={16} />
            </a>
            
            <a
              href={`https://wa.me/79099322226`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-full transition-all shadow-sm hover:shadow-md"
              title="WhatsApp"
            >
              <Icon name="MessageCircle" size={16} />
            </a>
            
            <a
              href={`https://t.me/+79099322226`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#0088CC] hover:bg-[#0077BB] text-white rounded-full transition-all shadow-sm hover:shadow-md"
              title="Telegram"
            >
              <Icon name="Send" size={16} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}