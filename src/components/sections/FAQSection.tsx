import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Что входит в стоимость тура?",
    a: "В стоимость включено ВСЁ: автомобиль премиум-класса Mercedes/BMW/Audi с водителем, проживание в отелях 5★, персональный гид-эксперт, все трансферы, входные билеты, полная страховка. Никаких скрытых платежей!",
  },
  {
    q: "Можно ли изменить программу под себя?",
    a: "Да! Это главное преимущество наших туров. Мы создаём программу с нуля специально под ваши интересы. Хотите больше архитектуры? Или гастрономии? Скажите — и мы подстроимся под вас.",
  },
  {
    q: "А если мне что-то не понравится?",
    a: "У нас гарантия возврата 100% стоимости, если тур не оправдает ожиданий. За 14 лет работы к нам вернулось 98% клиентов. Ваше удовольствие — наша репутация.",
  },
  {
    q: "Сколько человек в группе?",
    a: "Никаких групп! Только вы, ваши спутники и личный гид. Это полностью приватное путешествие. Вы не будете ждать опаздывающих туристов или подстраиваться под чужой ритм.",
  },
  {
    q: "Как быстро можно забронировать?",
    a: "Оставьте заявку прямо сейчас — мы перезвоним за 15 минут, обсудим детали и забронируем тур. При бронировании до конца месяца — скидка 30%!",
  },
  {
    q: "Почему вы дороже обычных турагентств?",
    a: "Потому что мы даём то, чего нет у них: индивидуальную программу, премиум-авто, гида-эксперта только для вас, отели 5★ и полный сервис без компромиссов. Вы платите за качество, а не за количество.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
            <Icon name="HelpCircle" size={18} className="text-[#D4AF37]" />
            <span className="text-sm font-semibold text-[#D4AF37]">
              Ответы на вопросы
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
            Остались вопросы?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            <strong>Мы ответили на самые частые.</strong> Не нашли свой?
            Позвоните — ответим за минуту!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#D4AF37] transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
