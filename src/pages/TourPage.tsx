import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TourHero from '@/components/tour/TourHero';
import TourContent from '@/components/tour/TourContent';
import TourSidebar from '@/components/tour/TourSidebar';
import { tours } from '@/data/tours';

export default function TourPage() {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();

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
      
      <TourHero tour={tour} onBookingClick={() => navigate(`/booking/${tourId}`)} />

      <div className="w-full px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <TourContent 
              tour={tour} 
              onBookingClick={() => navigate(`/booking/${tourId}`)}
              onDateSelect={(date) => navigate(`/booking/${tourId}?date=${date}`)}
            />
            <TourSidebar tour={tour} onBookingClick={() => navigate(`/booking/${tourId}`)} />
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}