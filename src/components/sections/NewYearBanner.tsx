import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function NewYearBanner() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 via-green-600 to-red-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-10 md:p-14 lg:p-20 border-4 border-[#D4AF37]">
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-red-500 to-green-600 rounded-full flex items-center justify-center animate-pulse shadow-xl">
                  <Icon name="Sparkles" size={48} className="text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left w-full">
                <div className="inline-flex items-center gap-2 bg-red-100 px-5 py-2.5 rounded-full mb-6">
                  <Icon name="Calendar" size={18} className="text-red-600" />
                  <span className="text-sm font-bold text-red-600 uppercase">Специальное предложение</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-playfair text-[#1A1F2C]">
                  🎄 Новогодний тур по Золотому кольцу
                </h2>
                
                <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                  Встретьте <strong>Новый 2025 год</strong> в древних русских городах! Праздничный банкет, развлекательная программа и незабываемые впечатления.
                </p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-5 md:gap-6 mb-8">
                  <div className="flex items-center gap-2 text-gray-700 px-3 py-2 bg-gray-50 rounded-lg">
                    <Icon name="Calendar" size={20} className="text-green-600" />
                    <span className="font-semibold text-sm sm:text-base">30 дек - 2 янв</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 px-3 py-2 bg-gray-50 rounded-lg">
                    <Icon name="MapPin" size={20} className="text-red-600" />
                    <span className="font-semibold text-sm sm:text-base">Суздаль • Владимир • Ярославль</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-lg">
                    <span className="text-xl sm:text-2xl font-bold text-[#D4AF37] font-playfair">от 35 000 ₽</span>
                  </div>
                </div>
                
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white shadow-lg text-base sm:text-lg px-6 sm:px-8 py-6"
                  onClick={() => navigate('/tours/new-year')}
                >
                  <Icon name="Gift" size={22} className="mr-2" />
                  Забронировать новогодний тур
                </Button>
                
                <p className="text-sm text-gray-500 mt-6">
                  ⚡ Осталось мест: <span className="font-bold text-red-600">всего 8</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
}