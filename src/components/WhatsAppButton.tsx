import Icon from '@/components/ui/icon';

export default function WhatsAppButton() {
  const phoneNumber = '74951797444';
  const message = encodeURIComponent('Здравствуйте! Интересуют туры по Золотому Кольцу');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA59] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Написать в WhatsApp"
    >
      <Icon name="MessageCircle" size={28} className="group-hover:scale-110 transition-transform" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
        1
      </span>
    </a>
  );
}
