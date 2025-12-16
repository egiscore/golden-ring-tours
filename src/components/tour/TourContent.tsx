import Icon from '@/components/ui/icon';
import { Tour } from '@/data/tours';
import TourOptionsTable from './TourOptionsTable';

interface TourContentProps {
  tour: Tour;
  onBookingClick: () => void;
}

export default function TourContent({ tour, onBookingClick }: TourContentProps) {
  return (
    <div className="lg:col-span-2 space-y-8 sm:space-y-12 w-full max-w-full overflow-hidden">
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-playfair text-[#1A1F2C]">
          О туре
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          {tour.fullDescription}
        </p>
      </section>

      {tour.gallery.length > 1 && (
        <section className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-playfair text-[#1A1F2C] flex items-center gap-2 sm:gap-3">
            <Icon name="Image" className="text-[#D4AF37]" size={24} />
            Фотогалерея
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 max-w-2xl">
            {tour.gallery.map((photo, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                <img 
                  src={photo} 
                  alt={`${tour.title} - фото ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section>
      )}

      {tour.options && tour.options.length > 0 && (
        <TourOptionsTable options={tour.options} onBookingClick={onBookingClick} />
      )}

      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-playfair text-[#1A1F2C] flex items-center gap-2 sm:gap-3">
          <Icon name="MapPin" className="text-[#D4AF37]" size={24} />
          Программа тура
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {tour.program.map((day, index) => (
            <div key={index} className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-[#F5F1E8] rounded-lg">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-[#D4AF37] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                {index + 1}
              </div>
              <p className="text-sm sm:text-base text-gray-700 flex-1">{day}</p>
            </div>
          ))}
        </div>
      </section>

      {tour.cities.length > 0 && (
        <section className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-playfair text-[#1A1F2C] flex items-center gap-2 sm:gap-3">
            <Icon name="Map" className="text-[#D4AF37]" size={24} />
            Города маршрута
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {tour.cities.map((city, index) => (
              <div key={index} className="bg-white border-2 border-[#D4AF37] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-sm sm:text-base text-[#1A1F2C] font-medium">{city}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-playfair text-[#1A1F2C] flex items-center gap-2 sm:gap-3">
          <Icon name="Quote" className="text-[#D4AF37]" size={24} />
          Отзывы туристов
        </h2>
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-4 sm:p-6 rounded-xl border-2 border-[#D4AF37]/20">
            <div className="flex items-center gap-1 mb-3 sm:mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="Star" className="text-[#D4AF37] fill-[#D4AF37]" size={16} />
              ))}
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
              "Потрясающий тур! Всё было организовано идеально. Гид очень знающий и увлечённый. Увидели столько красивых мест! Отели комфортные, питание отличное. Спасибо за незабываемые впечатления!"
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="User" className="text-[#D4AF37]" size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">Елена Михайловна</p>
                <p className="text-xs sm:text-sm text-gray-500">Москва • Сентябрь 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-4 sm:p-6 rounded-xl border-2 border-[#D4AF37]/20">
            <div className="flex items-center gap-1 mb-3 sm:mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="Star" className="text-[#D4AF37] fill-[#D4AF37]" size={16} />
              ))}
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
              "Спасибо за незабываемое путешествие! Особенно понравилось внимание к деталям и комфорт. Всё продумано до мелочей. Рекомендую всем друзьям!"
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="User" className="text-[#D4AF37]" size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">Дмитрий Козлов</p>
                <p className="text-xs sm:text-sm text-gray-500">Санкт-Петербург • Октябрь 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-4 sm:p-6 rounded-xl border-2 border-[#D4AF37]/20">
            <div className="flex items-center gap-1 mb-3 sm:mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="Star" className="text-[#D4AF37] fill-[#D4AF37]" size={16} />
              ))}
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
              "Ездили всей семьёй — все в восторге! Детям особенно понравились интерактивные экскурсии. Гид умел увлечь и взрослых, и детей. Уже планируем следующую поездку с вами!"
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="User" className="text-[#D4AF37]" size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">Ольга Соколова</p>
                <p className="text-xs sm:text-sm text-gray-500">Екатеринбург • Ноябрь 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}