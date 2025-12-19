import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import TourHero from '@/components/tour/TourHero';
import TourContent from '@/components/tour/TourContent';
import TourSidebar from '@/components/tour/TourSidebar';
import Icon from '@/components/ui/icon';
import { tours } from '@/data/tours';
import TourBookingForm from '@/components/forms/TourBookingForm';

export default function TourPage() {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const [selectedPrice, setSelectedPrice] = useState<number | undefined>(undefined);

  const tour = tourId ? tours[tourId] : null;

  useEffect(() => {
    if (!tour) {
      navigate('/');
    } else {
      window.scrollTo(0, 0);
    }
  }, [tour, navigate]);

  if (!tour) {
    return null;
  }

  const scrollToSection = (id: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white font-inter overflow-x-hidden">
      <Header scrollToSection={scrollToSection} />
      
      <TourHero tour={tour} />

      <div className="w-full px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <TourContent 
              tour={tour} 
              onBookingClick={(price) => {
                if (price) setSelectedPrice(price);
                const bookingSection = document.getElementById('booking-form');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              onDateSelect={() => {
                const bookingSection = document.getElementById('booking-form');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              sidebarContent={
                <div className="space-y-6">
                  <div className="bg-blue-50 border-2 border-blue-200 p-4 sm:p-6 rounded-xl">
                    <div className="flex items-start gap-3">
                      <Icon name="Info" className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">
                          Нужна консультация?
                        </h4>
                        <p className="text-xs sm:text-sm text-blue-700 mb-3 sm:mb-4">
                          Позвоните нам, и мы ответим на все вопросы о туре
                        </p>
                        <a
                          href="tel:+78007003498"
                          className="text-sm sm:text-base text-blue-600 font-semibold hover:underline"
                        >
                          8 (800) 700-34-98
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              }
              bookingForm={
                <section className="w-full" id="booking-form">
                  <TourBookingForm 
                    tourId={tourId}
                    tourTitle={tour.title}
                    defaultPrice={tour.options?.[0]?.price || 18000}
                    selectedPrice={selectedPrice}
                  />
                </section>
              }
            />
            <TourSidebar 
              tour={tour} 
              onBookingClick={() => {
                const bookingSection = document.getElementById('booking-form');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }} 
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}