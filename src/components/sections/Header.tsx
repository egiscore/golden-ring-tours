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
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              navigate('/');
            }
          }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center shrink-0">
            <Icon name="Crown" className="text-white" size={20} />
          </div>
          <div className="flex flex-col">
            <span className="md:text-2xl text-[#1A1F2C] font-playfair leading-tight text-2xl font-semibold">
              Ви Эф Эс Глобал
            </span>
            <span className="text-xs text-gray-600 font-medium">
              Туристический оператор
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
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-4 py-2 rounded-full hover:shadow-lg transition-all font-medium d-nonr"
            onClick={() => {
              if (location.pathname === '/') {
                scrollToSection("tours");
              } else {
                navigate('/');
                setTimeout(() => scrollToSection("tours"), 100);
              }
            }}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-4 py-2 rounded-full hover:shadow-lg transition-all font-medium"
          >
            <Icon name="Search" size={18} />
            <span>Посмотреть туры</span>
          </button>
          <a
            href="tel:+74951797444"
            className="flex items-center gap-2 text-[#D4AF37] hover:text-[#B8941F] transition-colors font-semibold"
          >
            <Icon name="Phone" size={18} />
            <span className="hidden lg:inline">8 (800) 700-34-98</span>
          </a>
        </div>
      </nav>
    </header>
  );
}