import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source") || "direct";
    const utmMedium = urlParams.get("utm_medium") || "";
    const utmCampaign = urlParams.get("utm_campaign") || "";

    let sourceInfo = `📍 Страница: главная (контактная форма)\n🎯 Источник: ${utmSource}`;
    if (utmMedium) sourceInfo += ` / ${utmMedium}`;
    if (utmCampaign) sourceInfo += `\n📢 Кампания: ${utmCampaign}`;

    const emailValue = formData.get("email") as string;

    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: emailValue && emailValue.trim() !== "" ? emailValue : null,
      message: `${sourceInfo}\n\n💬 Сообщение: ${formData.get("message") || "Не указано"}`,
    };

    try {
      const response = await fetch(
        "https://functions.poehali.dev/eb6d500d-ad4a-455e-a440-a45f5a6c98d3",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }

      toast({
        title: "✅ Заявка отправлена!",
        description: "Мы перезвоним вам в течение 15 минут",
        duration: 5000,
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "❌ Ошибка",
        description: "Позвоните нам: +7 (495) 179-74-44",
        variant: "destructive",
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#F5F1E8] via-white to-[#F5F1E8]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
              <Icon
                name="MessageCircle"
                size={18}
                className="text-[#D4AF37]"
              />
              <span className="text-sm font-semibold text-[#D4AF37]">
                Свяжитесь с нами
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#1A1F2C]">
              Готовы увидеть Золотое кольцо?
            </h2>
            <p className="text-lg text-gray-600">
              <strong>Оставьте заявку сейчас</strong> — мы перезвоним в
              течение 15 минут и подберём идеальную программу
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#D4AF37]/5 to-white rounded-3xl p-2 mb-12">
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] font-playfair mb-1">
                    -5%
                  </div>
                  <div className="text-sm text-gray-600">
                    При бронировании
                    <br />
                    до 31 декабря
                  </div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] font-playfair mb-1">
                    Бесплатно
                  </div>
                  <div className="text-sm text-gray-600">
                    Консультация
                    <br />и подбор тура
                  </div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] font-playfair mb-1">
                    15 мин
                  </div>
                  <div className="text-sm text-gray-600">
                    Время ответа
                    <br />
                    на заявку
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-0 relative">
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                Скидка -5%!
              </div>
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">
                    Ваше имя *
                  </label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Иван Иванов"
                    className="h-12 border-gray-300 focus:border-[#D4AF37]"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">
                    Телефон *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    className="h-12 border-gray-300 focus:border-[#D4AF37]"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">
                    Email (необязательно)
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    className="h-12 border-gray-300 focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">
                    Сообщение
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Расскажите о ваших пожеланиях..."
                    className="min-h-[120px] border-gray-300 focus:border-[#D4AF37]"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#D4AF37] text-white h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Отправка..." : "Получить консультацию"}
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  Нажимая кнопку, вы соглашаетесь с политикой
                  конфиденциальности
                </p>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#1A1F2C]">
                      Телефон
                    </h3>
                    <a
                      href="tel:+74951797444"
                      className="text-[#D4AF37] hover:text-[#B8941F] font-semibold text-xl block mb-1"
                    >8 (800) 700-34-98</a>
                    <a
                      href="tel:88007003498"
                      className="text-[#D4AF37] hover:text-[#B8941F] font-semibold text-xl block mb-1"
                    >8 (495) 179-74-44</a>
                    <p className="text-gray-600 text-sm">
                      Без выходных, 9:00-21:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#1A1F2C]">
                      Email
                    </h3>
                    <a
                      href="mailto:tours@vfs.travel"
                      className="text-[#D4AF37] hover:text-[#B8941F] font-semibold"
                    >
                      tours@vfs.travel
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Ответим за 15 минут
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="MapPin"
                      className="text-[#D4AF37]"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#1A1F2C]">
                      Офис
                    </h3>
                    <p className="text-gray-700">г. Москва, Пресненская наб. 6с2</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Пн-Пт: 10:00-19:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}