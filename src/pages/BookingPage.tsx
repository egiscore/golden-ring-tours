import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { tours } from '@/data/tours';
import WhatsAppButton from '@/components/WhatsAppButton';
import BookingHeader from '@/components/booking/BookingHeader';
import BookingTourInfo from '@/components/booking/BookingTourInfo';
import BookingDetailsForm from '@/components/booking/BookingDetailsForm';
import BookingPaymentStep from '@/components/booking/BookingPaymentStep';

export default function BookingPage() {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const tour = tourId ? tours[tourId] : null;
  const preselectedDate = searchParams.get('date') || '';

  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [formData, setFormData] = useState({
    date: preselectedDate,
    adults: 2,
    children: 0,
    name: '',
    email: '',
    phone: '',
    comment: '',
    bookingNumber: ''
  });

  useEffect(() => {
    if (!tour) {
      navigate('/');
    } else {
      window.scrollTo(0, 0);
    }
  }, [tour, navigate]);

  if (!tour) return null;

  const basePrice = tour.options?.[0]?.price || 18000;
  const totalPeople = formData.adults + formData.children;
  const childDiscount = 0.7;
  const totalPrice = (formData.adults * basePrice) + (formData.children * basePrice * childDiscount);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.date || !formData.name || !formData.email || !formData.phone) {
      toast({
        title: 'Заполните все поля',
        description: 'Пожалуйста, укажите все обязательные данные',
        variant: 'destructive'
      });
      return;
    }

    setStep('payment');
  };

  const handlePayment = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/5f3c4163-de98-4711-91ae-4c7424870c2f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tourId: tourId,
          tourTitle: tour.title,
          date: formData.date,
          adults: formData.adults,
          children: formData.children,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          totalPrice: totalPrice,
          comment: formData.comment
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormData(prev => ({ ...prev, bookingNumber: data.bookingNumber }));
        setStep('success');
        toast({
          title: 'Бронирование подтверждено!',
          description: 'Информация о туре отправлена на вашу почту'
        });
      } else {
        throw new Error(data.error || 'Ошибка при отправке заявки');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: error instanceof Error ? error.message : 'Не удалось отправить заявку',
        variant: 'destructive'
      });
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
      weekday: 'long'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F1E8] to-white">
      <BookingHeader tourId={tourId || ''} />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <BookingTourInfo tour={tour} />

        {step !== 'success' && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step === 'details' ? 'bg-[#D4AF37] text-white' : 'bg-green-500 text-white'
                }`}>
                  {step === 'details' ? '1' : <Icon name="Check" size={20} />}
                </div>
                <div>
                  <div className="font-semibold text-[#1A1F2C]">Детали поездки</div>
                  <div className="text-xs text-gray-500">Выберите дату и количество</div>
                </div>
              </div>

              <div className="flex-1 h-1 bg-gray-200 mx-4">
                <div className={`h-full transition-all duration-500 ${
                  step === 'payment' ? 'w-full bg-[#D4AF37]' : 'w-0'
                }`} />
              </div>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step === 'payment' ? 'bg-[#D4AF37] text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  2
                </div>
                <div>
                  <div className={`font-semibold ${step === 'payment' ? 'text-[#1A1F2C]' : 'text-gray-400'}`}>
                    Бронирование
                  </div>
                  <div className="text-xs text-gray-500">Подтверждение заказа</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {step === 'details' && (
            <BookingDetailsForm
              formData={formData}
              onInputChange={handleInputChange}
              onSubmit={handleSubmitDetails}
              totalPrice={totalPrice}
            />
          )}

          {(step === 'payment' || step === 'success') && (
            <BookingPaymentStep
              step={step}
              formData={formData}
              tour={tour}
              totalPrice={totalPrice}
              onPayment={handlePayment}
              onBack={() => setStep('details')}
              formatDate={formatDate}
            />
          )}
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}