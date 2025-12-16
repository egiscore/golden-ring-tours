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
    <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-6 rounded-xl border-2 border-[#D4AF37]/20">
      <h3 className="text-lg font-bold mb-4 font-playfair text-[#1A1F2C] flex items-center gap-2">
        <Icon name="Share2" className="text-[#D4AF37]" size={24} />
        Поделиться туром
      </h3>
      
      <div className="space-y-3">
        <a
          href={shareLinks.vk}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-[#0077FF] hover:bg-[#0066DD] text-white rounded-lg transition-colors"
        >
          <Icon name="Share2" size={20} />
          <span className="font-medium">ВКонтакте</span>
        </a>

        <a
          href={shareLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-[#0088CC] hover:bg-[#0077BB] text-white rounded-lg transition-colors"
        >
          <Icon name="Send" size={20} />
          <span className="font-medium">Telegram</span>
        </a>

        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-lg transition-colors"
        >
          <Icon name="MessageCircle" size={20} />
          <span className="font-medium">WhatsApp</span>
        </a>

        <Button
          onClick={copyToClipboard}
          variant="outline"
          className="w-full justify-start gap-3 border-2 border-[#D4AF37] text-[#1A1F2C] hover:bg-[#D4AF37]/10"
        >
          <Icon name="Copy" size={20} />
          <span className="font-medium">Скопировать ссылку</span>
        </Button>
      </div>
    </div>
  );
}
