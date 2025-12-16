import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Tour } from '@/data/tours';
import TourOptionsTable from './TourOptionsTable';

interface TourContentProps {
  tour: Tour;
  onBookingClick: (price?: number) => void;
  onDateSelect?: (date: string) => void;
  bookingForm?: React.ReactNode;
  sidebarContent?: React.ReactNode;
}

export default function TourContent({ tour, onBookingClick, onDateSelect, bookingForm, sidebarContent }: TourContentProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const openLightbox = (image: string) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage('');
  };

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
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-playfair text-[#D4AF37] flex items-center gap-2 sm:gap-3">
          <Icon name="MapPin" className="text-[#D4AF37]" size={24} />
          Программы туров
        </h2>
        
        <div className="mb-6 px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg">
          <div className="flex items-start gap-2 sm:gap-3">
            <Icon name="Bus" className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm sm:text-base text-blue-900">
              <strong>Дополнительная услуга:</strong> Для туристов из других городов мы можем организовать трансфер до Москвы из вашего города пребывания. Уточняйте стоимость при бронировании.
            </p>
          </div>
        </div>
        
        {tour.options && tour.options.length > 0 ? (
          <div className="space-y-8 sm:space-y-12">
            {tour.options.map((option, optIndex) => (
              <div key={optIndex} className="space-y-4 pb-8 sm:pb-10 border-b-2 border-gray-200 last:border-b-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex-shrink-0">
                      <span className="font-bold text-xs sm:text-sm whitespace-nowrap">{option.days} {option.days === 1 ? 'день' : option.days < 5 ? 'дня' : 'дней'}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1F2C] font-playfair leading-tight">
                      {option.description}
                    </h3>
                  </div>
                  <div className="text-center sm:text-right flex-shrink-0">
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#D4AF37] whitespace-nowrap">от {option.price.toLocaleString('ru-RU')} ₽</span>
                  </div>
                </div>
                
                {option.cities && option.cities.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {option.cities.map((city, cityIndex) => (
                      <div key={cityIndex} className="bg-white border border-[#D4AF37] px-2.5 py-1 rounded-full">
                        <span className="text-xs text-[#1A1F2C] font-medium">{city}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {option.program && option.program.length > 0 && (
                  <div className="space-y-3">
                    {option.program.map((day, dayIndex) => (
                      <div key={dayIndex} className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-[#F5F1E8] rounded-lg">
                        <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-[#D4AF37] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                          {dayIndex + 1}
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 flex-1">{day}</p>
                      </div>
                    ))}
                  </div>
                )}

                {option.photos && option.photos.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <Icon name="Image" className="text-[#D4AF37]" size={16} />
                      Фотографии маршрута
                    </h4>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {option.photos.map((photo, photoIndex) => (
                        <button
                          key={photoIndex}
                          onClick={() => openLightbox(photo)}
                          className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-[#D4AF37] transition-all hover:scale-105"
                        >
                          <img 
                            src={photo} 
                            alt={`Фото ${photoIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 bg-gradient-to-br from-[#F5F1E8] to-white rounded-xl p-4 sm:p-5 border border-gray-200">
                  <h4 className="text-base font-bold text-[#1A1F2C] mb-3 flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-[#D4AF37]" size={18} />
                    Что включено
                  </h4>
                  <div className="space-y-1.5 mb-4">
                    {(option.included || tour.included).map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <Icon name="Check" className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={14} />
                        <span className="text-xs sm:text-sm text-gray-700 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      const bookingSection = document.getElementById('booking-form');
                      if (bookingSection) {
                        bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                      onBookingClick(option.price);
                    }}
                    className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white font-bold py-3 px-5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Icon name="Calendar" size={18} />
                    Бесплатный предзаказ
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
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
        )}
      </section>

      {tour.cities.length > 0 && !(tour.options && tour.options.length > 0 && tour.options.some(opt => opt.cities)) && (
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
        <TourOptionsTable 
          options={tour.options} 
          onBookingClick={onBookingClick}
        />
      )}

      <div className="lg:hidden">
        {sidebarContent}
      </div>

      {bookingForm}

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

      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition-colors"
          >
            <Icon name="X" size={32} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Увеличенное фото"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}