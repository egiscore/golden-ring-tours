import json
import requests
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    """
    Тестовая функция для отправки заявки
    """
    test_data = {
        "name": "Тестовый Клиент",
        "phone": "+7 (999) 888-77-66",
        "email": "test@example.com",
        "message": "📍 Страница: промо\n🎯 Источник: yandex / retargeting\n📢 Кампания: golden_ring_retarget\n🔑 Ключевое слово: купить тур золотое кольцо\n\n🎫 Тур: Индивидуальный VIP тур\n\n💬 Комментарий: Хочу забронировать тур на 3 дня"
    }
    
    try:
        response = requests.post(
            'https://functions.poehali.dev/eb6d500d-ad4a-455e-a440-a45f5a6c98d3',
            json=test_data,
            timeout=10
        )
        
        result = response.json()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'test_status': response.status_code,
                'contact_response': result,
                'message': 'Тестовая заявка отправлена! Проверьте Telegram и Email'
            }, ensure_ascii=False),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}, ensure_ascii=False),
            'isBase64Encoded': False
        }
