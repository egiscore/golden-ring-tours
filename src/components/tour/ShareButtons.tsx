import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonsProps {
  tourTitle: string;
  tourUrl: string;
}

export default function ShareButtons({ tourTitle, tourUrl }: ShareButtonsProps) {
  const { toast } = useToast();
  const fullUrl = window.location.href;

  const shareLinks = {
    vk: `https://vk.com/share.php?url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(tourTitle)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(tourTitle)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${tourTitle} - ${fullUrl}`)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      toast({
        title: 'Ссылка скопирована!',
        description: 'Теперь вы можете поделиться ей с друзьями',
      });
    } catch (err) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось скопировать ссылку',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-4 rounded-xl border-2 border-[#D4AF37]/20">
      <h3 className="text-base font-bold mb-3 font-playfair text-[#1A1F2C] flex items-center gap-2">
        <Icon name="Share2" className="text-[#D4AF37]" size={20} />
        Поделиться
      </h3>
      
      <div className="flex flex-wrap gap-2">
        <a
          href={shareLinks.vk}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-[#0077FF] hover:bg-[#0066DD] text-white rounded-lg transition-colors text-sm"
        >
          <Icon name="Share2" size={16} />
          <span className="font-medium">ВК</span>
        </a>

        <a
          href={shareLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-[#0088CC] hover:bg-[#0077BB] text-white rounded-lg transition-colors text-sm"
        >
          <Icon name="Send" size={16} />
          <span className="font-medium">Telegram</span>
        </a>

        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-lg transition-colors text-sm"
        >
          <Icon name="MessageCircle" size={16} />
          <span className="font-medium">WhatsApp</span>
        </a>

        <Button
          onClick={copyToClipboard}
          variant="outline"
          className="flex items-center gap-2 px-3 py-2 border-2 border-[#D4AF37] text-[#1A1F2C] hover:bg-[#D4AF37]/10 text-sm h-auto"
        >
          <Icon name="Copy" size={16} />
          <span className="font-medium">Копировать</span>
        </Button>
      </div>
    </div>
  );
}