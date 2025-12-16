import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { TourOption } from '@/data/tours';

interface TourOptionsTableProps {
  options: TourOption[];
  onBookingClick: () => void;
}

export default function TourOptionsTable({ options, onBookingClick }: TourOptionsTableProps) {
  return (
    <section className="my-8 sm:my-12 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-playfair text-[#1A1F2C] flex items-center gap-2 sm:gap-3">
        <Icon name="Calendar" className="text-[#D4AF37]" size={24} />
        Варианты и стоимость
      </h2>
      
      {/* Мобильная версия - карточки */}
      <div className="lg:hidden space-y-4">
        {options.map((option, index) => (
          <div key={index} className="bg-gradient-to-br from-white to-[#F5F1E8] rounded-xl border-2 border-[#D4AF37]/20 p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Icon name="Clock" className="text-[#D4AF37]" size={20} />
                <span className="font-semibold text-[#1A1F2C]">
                  {option.days} {option.days === 1 ? 'день' : option.days < 5 ? 'дня' : 'дней'}
                </span>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-[#D4AF37]">
                  от {option.price.toLocaleString('ru-RU')} ₽
                </div>
                <div className="text-xs text-gray-500">на человека</div>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3">{option.description}</p>
            <Button
              onClick={onBookingClick}
              className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white"
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Забронировать
            </Button>
          </div>
        ))}
      </div>

      {/* Десктопная версия - таблица */}
      <div className="hidden lg:block bg-gradient-to-br from-white to-[#F5F1E8] rounded-xl border-2 border-[#D4AF37]/20 overflow-hidden w-full">
        <div className="overflow-x-auto w-full">
          <table className="w-full min-w-full">
            <thead>
              <tr className="bg-[#D4AF37] text-white">
                <th className="px-6 py-4 text-left font-semibold">Длительность</th>
                <th className="px-6 py-4 text-left font-semibold">Описание программы</th>
                <th className="px-6 py-4 text-right font-semibold">Стоимость</th>
                <th className="px-6 py-4 text-center font-semibold">Действие</th>
              </tr>
            </thead>
            <tbody>
              {options.map((option, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-200 hover:bg-[#F5F1E8]/50 transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" className="text-[#D4AF37]" size={20} />
                      <span className="font-semibold text-[#1A1F2C]">
                        {option.days} {option.days === 1 ? 'день' : option.days < 5 ? 'дня' : 'дней'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    {option.description}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span className="text-2xl font-bold text-[#D4AF37]">
                      от {option.price.toLocaleString('ru-RU')} ₽
                    </span>
                    <div className="text-sm text-gray-500">на человека</div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Button
                      onClick={onBookingClick}
                      className="bg-[#D4AF37] hover:bg-[#B8941F] text-white"
                    >
                      <Icon name="Phone" size={18} className="mr-2" />
                      Забронировать
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Информационное сообщение */}
      <div className="mt-4 px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg">
        <div className="flex items-start gap-2 sm:gap-3">
          <Icon name="Info" className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
          <p className="text-xs sm:text-sm text-blue-700">
            <strong>Обратите внимание:</strong> Цены указаны на одного человека при двухместном размещении. 
            Возможны скидки для групп от 4 человек.
          </p>
        </div>
      </div>
    </section>
  );
}