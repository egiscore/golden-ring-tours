import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  onSubmit?: () => void;
  selectedTour?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  source = "главная",
  onSubmit,
  selectedTour,
}: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source") || "direct";
    const utmMedium = urlParams.get("utm_medium") || "";
    const utmCampaign = urlParams.get("utm_campaign") || "";
    const utmContent = urlParams.get("utm_content") || "";
    const keyword = urlParams.get("keyword") || urlParams.get("utm_term") || "";

    let sourceInfo = `📍 Страница: ${source}\n🎯 Источник: ${utmSource}`;
    if (utmMedium) sourceInfo += ` / ${utmMedium}`;
    if (utmCampaign) sourceInfo += `\n📢 Кампания: ${utmCampaign}`;
    if (utmContent) sourceInfo += `\n🎨 Содержание: ${utmContent}`;
    if (keyword) sourceInfo += `\n🔑 Ключевое слово: ${keyword}`;
    if (!keyword) sourceInfo += `\n🔑 Ключевое слово: не указано`;

    const emailValue = formData.get("email") as string;

    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: emailValue && emailValue.trim() !== "" ? emailValue : null,
      message: `${sourceInfo}\n\n🎫 Тур: ${formData.get("tour")}\n\n💬 Комментарий: ${formData.get("comment") || "Не указан"}`,
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
        const errorData = await response.json();
        throw new Error(errorData.message || "Ошибка отправки");
      }

      toast({
        title: "✅ Заявка успешно отправлена!",
        description: "Менеджер свяжется с вами в ближайшее время",
        duration: 5000,
      });

      if (onSubmit) {
        onSubmit();
      }

      onClose();
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "❌ Ошибка отправки",
        description:
          error instanceof Error
            ? error.message
            : "Не удалось отправить заявку. Позвоните нам: +7 (495) 179-74-44",
        variant: "destructive",
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-playfair">
            Подберите мне тур
          </DialogTitle>
          <DialogDescription className="text-sm">
            Свяжемся с вами в течение часа
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-3" onSubmit={handleSubmit} key={selectedTour}>
          <div>
            <label className="text-xs font-medium mb-1 block">Ваше имя</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              placeholder="Иван"
            />
          </div>
          <div>
            <label className="text-xs font-medium mb-1 block">Телефон</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              placeholder="+7 (999) 123-45-67"
            />
          </div>
          <div>
            <label className="text-xs font-medium mb-1 block">
              Email (необязательно)
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label className="text-xs font-medium mb-1 block">Тур</label>
            <select
              name="tour"
              defaultValue={selectedTour || "Автобусный тур"}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <option>Автобусный тур</option>
              <option>Круиз на лайнере</option>
              <option>Экскурсионный тур</option>
              <option>Тур на поезде</option>
              <option>Духовное путешествие</option>
              <option>Гастрономический тур</option>
              <option>Индивидуальный VIP тур</option>
              <option>Фототур для профессионалов</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium mb-1 block">
              Комментарий
            </label>
            <textarea
              name="comment"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] min-h-[80px]"
              placeholder="Расскажите о Ваших пожеланиях..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white h-10 text-sm"
          >
            {isSubmitting ? "Отправка..." : "Отправить"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}