#!/usr/bin/env node

const testData = {
  name: "Тестовый Клиент", 
  phone: "+7 (999) 888-77-66", 
  email: "test@example.com", 
  message: "📍 Страница: промо\n🎯 Источник: yandex / retargeting\n📢 Кампания: golden_ring_retarget\n🔑 Ключевое слово: купить тур золотое кольцо\n\n🎫 Тур: Индивидуальный VIP тур\n\n💬 Комментарий: Хочу забронировать тур на 3 дня"
};

console.log('Отправка тестовой заявки...\n');

try {
  const response = await fetch('https://functions.poehali.dev/eb6d500d-ad4a-455e-a440-a45f5a6c98d3', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testData),
  });

  const result = await response.json();
  
  console.log('Статус:', response.status);
  console.log('Ответ:', JSON.stringify(result, null, 2));
  
  if (response.ok) {
    console.log('\n✅ Заявка успешно отправлена!');
  } else {
    console.log('\n❌ Ошибка при отправке');
  }
} catch (error) {
  console.error('❌ Ошибка:', error.message);
}
