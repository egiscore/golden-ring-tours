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
            <span className="text-[10px] sm:text-xs text-gray-600 font-medium whitespace-nowrap">Туристический оператор</span>
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
              href={`https://wa.me/79255693984?text=Здравствуйте! Хочу узнать подробнее о ваших турах`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full transition-all shadow-sm hover:shadow-md"
              title="WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}