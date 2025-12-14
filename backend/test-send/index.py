import json
import requests
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    """
    Тестовая функция для отправки заявок со всех форм (с email и без)
    """
    
    # Тест 1: Кнопка обратного звонка (БЕЗ email)
    callback_data = {
        "name": "Иван Тестовый (Обратный звонок)",
        "phone": "+7 (999) 111-11-11",
        "email": None,
        "message": "📍 Источник: Кнопка обратного звонка\n🎯 Канал: direct\n\n💬 Сообщение: Запрос обратного звонка"
    }
    
    # Тест 2: Форма бронирования тура (С email)
    booking_with_email = {
        "name": "Мария Тестовая (Бронирование)",
        "phone": "+7 (999) 222-22-22",
        "email": "test@example.com",
        "message": "📍 Страница: главная\n🎯 Источник: direct\n\n🎫 Тур: Индивидуальный VIP тур\n\n💬 Комментарий: Тестовая заявка с email"
    }
    
    # Тест 3: Форма бронирования тура (БЕЗ email)
    booking_no_email = {
        "name": "Петр Тестовый (Бронирование без email)",
        "phone": "+7 (999) 333-33-33",
        "email": None,
        "message": "📍 Страница: главная\n🎯 Источник: direct\n\n🎫 Тур: Экскурсионный тур\n\n💬 Комментарий: Тестовая заявка БЕЗ email"
    }
    
    # Тест 4: Контактная форма (С email)
    contact_with_email = {
        "name": "Анна Тестовая (Контакты)",
        "phone": "+7 (999) 444-44-44",
        "email": "anna.test@example.com",
        "message": "📍 Страница: главная (контактная форма)\n🎯 Источник: direct\n\n💬 Сообщение: Тестовая заявка с email из контактной формы"
    }
    
    # Тест 5: Контактная форма (БЕЗ email)
    contact_no_email = {
        "name": "Сергей Тестовый (Контакты без email)",
        "phone": "+7 (999) 555-55-55",
        "email": None,
        "message": "📍 Страница: главная (контактная форма)\n🎯 Источник: direct\n\n💬 Сообщение: Тестовая заявка БЕЗ email из контактной формы"
    }
    
    results = []
    tests = [
        ("Обратный звонок (БЕЗ email)", callback_data),
        ("Бронирование С email", booking_with_email),
        ("Бронирование БЕЗ email", booking_no_email),
        ("Контактная форма С email", contact_with_email),
        ("Контактная форма БЕЗ email", contact_no_email)
    ]
    
    for test_name, test_data in tests:
        try:
            response = requests.post(
                'https://functions.poehali.dev/eb6d500d-ad4a-455e-a440-a45f5a6c98d3',
                json=test_data,
                timeout=10
            )
            
            result = response.json()
            results.append({
                'test': test_name,
                'status': response.status_code,
                'success': response.status_code == 200,
                'response': result
            })
        except Exception as e:
            results.append({
                'test': test_name,
                'status': 'error',
                'success': False,
                'error': str(e)
            })
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'message': 'Отправлено 5 тестовых заявок! Проверьте Telegram и Email',
            'results': results
        }, ensure_ascii=False),
        'isBase64Encoded': False
    }