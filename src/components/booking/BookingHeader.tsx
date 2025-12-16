import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface BookingHeaderProps {
  tourId: string;
}

export default function BookingHeader({ tourId }: BookingHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(`/tours/${tourId}`)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
          >
            <Icon name="ArrowLeft" size={20} />
            <span className="font-medium">Назад к туру</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-600">Безопасное соединение</span>
          </div>
        </div>
      </div>
    </div>
  );
}
