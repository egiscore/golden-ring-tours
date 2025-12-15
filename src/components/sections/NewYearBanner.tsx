import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function NewYearBanner() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 via-green-600 to-red-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-10 md:p-16 border-4 border-[#D4AF37]">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-red-500 to-green-600 rounded-full flex items-center justify-center animate-pulse shadow-xl">
                  <Icon name="Sparkles" size={48} className="text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
                  <Icon name="Calendar" size={18} className="text-red-600" />
                  <span className="text-sm font-bold text-red-600 uppercase">Специальное предложение</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-5 font-playfair text-[#1A1F2C]">
                  🎄 Новогодний тур по Золотому кольцу
                </h2>
                
                <p className="text-lg text-gray-700 mb-8">
                  Встретьте <strong>Новый 2025 год</strong> в древних русских городах! Праздничный банкет, развлекательная программа и незабываемые впечатления.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Icon name="Calendar" size={20} className="text-green-600" />
                    <span className="font-semibold">30 дек - 2 янв</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Icon name="MapPin" size={20} className="text-red-600" />
                    <span className="font-semibold">Суздаль • Владимир • Ярославль</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#D4AF37] font-playfair">от 35 000 ₽</span>
                  </div>
                </div>
                
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white shadow-lg text-lg px-8"
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