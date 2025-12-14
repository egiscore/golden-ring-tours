import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
              <Icon name="Crown" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold font-playfair">
              Золотое Кольцо
            </span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-gray-400 text-center">
              © 2025 Ви Эф Эс.
              <br />
              Реестровый номер лицензии РТО 024501.
              <br />
              Финансовое обеспечение № 16/24-73-0006521 от 09.12.2024.
              <br />
              Все права защищены.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="Instagram" size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="Facebook" size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="Twitter" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
