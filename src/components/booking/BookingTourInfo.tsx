import Icon from '@/components/ui/icon';

interface Tour {
  title: string;
  image: string;
  duration: string;
  cities: string[];
}

interface BookingTourInfoProps {
  tour: Tour;
}

export default function BookingTourInfo({ tour }: BookingTourInfoProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-2 border-[#D4AF37]/20">
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
          <img 
            src={tour.image} 
            alt={tour.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold font-playfair text-[#1A1F2C] mb-2">
            {tour.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={16} className="text-[#D4AF37]" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="MapPin" size={16} className="text-[#D4AF37]" />
              <span>{tour.cities[0]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
