import Icon from '@/components/ui/icon';
import { Tour } from '@/data/tours';
import TourOptionsTable from './TourOptionsTable';

interface TourContentProps {
  tour: Tour;
  onBookingClick: () => void;
  onDateSelect?: (date: string) => void;
  bookingForm?: React.ReactNode;
  sidebarContent?: React.ReactNode;
}

export default function TourContent({ tour, onBookingClick, onDateSelect, bookingForm, sidebarContent }: TourContentProps) {
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

      {tour.options && tour.options.length > 0 && (
        <TourOptionsTable options={tour.options} />
      )}

      {bookingForm}

      <div className="lg:hidden">
        {sidebarContent}
      </div>

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
    </div>
  );
}