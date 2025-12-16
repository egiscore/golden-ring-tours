import json
import os
import psycopg2
from datetime import datetime
from typing import Dict, Any
import requests

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Обрабатывает заявки на бронирование туров
    Сохраняет в БД и отправляет уведомление в Telegram
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # CORS
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        
        # Валидация
        required_fields = ['tourId', 'tourTitle', 'date', 'adults', 'name', 'phone', 'totalPrice']
        for field in required_fields:
            if field not in body_data:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': f'Missing required field: {field}'}),
                    'isBase64Encoded': False
                }
        
        # Генерация номера брони
        timestamp = datetime.now().strftime('%y%m%d%H%M%S')
        booking_number = f'GR-{timestamp[-6:]}'
        
        # Сохранение в БД
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor()
        
        cur.execute('''
            INSERT INTO bookings 
            (booking_number, tour_id, tour_title, departure_date, adults, children, 
             total_price, customer_name, customer_email, customer_phone, comment, status)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            RETURNING id
        ''', (
            booking_number,
            body_data['tourId'],
            body_data['tourTitle'],
            body_data['date'],
            body_data['adults'],
            body_data.get('children', 0),
            body_data['totalPrice'],
            body_data['name'],
            body_data.get('email', ''),
            body_data['phone'],
            body_data.get('comment', ''),
            'new'
        ))
        
        booking_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()
        
        # Отправка в Telegram
        telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID')
        
        if telegram_token and telegram_chat_id:
            message = f'''
🎫 <b>Новая заявка на бронирование!</b>

📋 Номер брони: <code>{booking_number}</code>
🎯 Тур: {body_data['tourTitle']}
📅 Дата отправления: {body_data['date']}

👥 Туристов:
  • Взрослые: {body_data['adults']} чел.
  • Дети: {body_data.get('children', 0)} чел.

💰 Стоимость: {body_data['totalPrice']:,.0f} ₽

👤 Клиент:
  • Имя: {body_data['name']}
  • Телефон: {body_data['phone']}

💬 Комментарий: {body_data.get('comment', 'Нет')}

🕐 Время заявки: {datetime.now().strftime('%d.%m.%Y %H:%M')}
            '''
            
            requests.post(
                f'https://api.telegram.org/bot{telegram_token}/sendMessage',
                json={
                    'chat_id': telegram_chat_id,
                    'text': message.strip(),
                    'parse_mode': 'HTML'
                },
                timeout=5
            )
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'success': True,
                'bookingNumber': booking_number,
                'bookingId': booking_id
            }),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }