import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const gallery = [
  {
    title: "Суздальский кремль",
    category: "Архитектура",
    image:
      "https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/1b97c2c0-0ad1-437b-9db1-3cd5463aaa87.jpg",
  },
  {
    title: "Церковь Покрова на Нерли",
    category: "Храмы",
    image:
      "https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/9d74460c-799a-473a-a4fa-9d73dc809dbd.jpg",
  },
  {
    title: "Ярославль, набережная",
    category: "Города",
    image:
      "https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/5426bb0f-2fbb-490d-ba13-d544d41cce6a.jpg",
  },
  {
    title: "Троице-Сергиева Лавра",
    category: "Монастыри",
    image:
      "https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/ccdac298-26df-4d81-81b5-44b72f445867.jpg",
  },
  {
    title: "Владимирские соборы",
    category: "Архитектура",
    image:
      "https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/699f480c-aa9b-427a-a4eb-a910c87d3ec1.jpg",
  },
  {
    title: "Ростовский кремль",
    category: "Памятники",
    image:
      "https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/ad1a4a4a-af68-4760-b04d-6716c46c8a69.jpg",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-[#F5F1E8] to-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Camera" size={18} className="text-[#D4AF37]" />
            <span className="text-sm font-semibold text-[#D4AF37]">
              Фотогалерея
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#1A1F2C]">
            Красота Золотого кольца
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Взгляните на величественную архитектуру древних русских городов
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="text-xs font-semibold text-[#D4AF37] mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold font-playfair">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
