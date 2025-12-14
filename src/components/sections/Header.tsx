import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    const detectCity = async () => {
      try {
        const response = await fetch(
          "https://functions.poehali.dev/d28ecf67-6d03-4d65-94c9-3019a8f77bd3",
        );
        const data = await response.json();
        if (data.city && data.city !== "XX") {
          setCity(data.city);
        }
      } catch (error) {
        console.error("Ошибка определения города:", error);
      }
    };

    detectCity();
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center shrink-0">
            <Icon name="Crown" className="text-white" size={20} />
          </div>
          <div className="flex flex-col">
            <span className="md:text-2xl text-[#1A1F2C] font-playfair leading-tight text-2xl font-semibold">
              Ви Эф Эс Глобал
            </span>
            <span className="text-xs text-gray-600 font-medium">
              {city && (
                <span className="text-[#D4AF37] font-semibold">{city} · </span>
              )}
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
        <a
          href="tel:+74951797444"
          className="flex items-center gap-2 text-[#D4AF37] hover:text-[#B8941F] transition-colors font-semibold"
        >
          <Icon name="Phone" size={18} />
          <span className="hidden lg:inline">8 (800) 700-34-98</span>
        </a>
      </nav>
    </header>
  );
}
