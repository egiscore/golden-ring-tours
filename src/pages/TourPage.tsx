import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import BookingModal from '@/components/modals/BookingModal';
import TourHero from '@/components/tour/TourHero';
import TourContent from '@/components/tour/TourContent';
import TourSidebar from '@/components/tour/TourSidebar';
import { tours } from '@/data/tours';

export default function TourPage() {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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
    <div className="min-h-screen bg-white font-inter">
      <Header scrollToSection={scrollToSection} />
      
      <TourHero tour={tour} onBookingClick={() => setIsBookingOpen(true)} />

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <TourContent tour={tour} />
            <TourSidebar tour={tour} onBookingClick={() => setIsBookingOpen(true)} />
          </div>
        </div>
      </div>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedTour={tour.title}
        source={`страница тура - ${tour.id}`}
      />
    </div>
  );
}
