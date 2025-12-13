import json
import os
import smtplib
import requests
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, Field, EmailStr

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1)
    phone: str = Field(..., min_length=5)
    email: EmailStr
    message: str = Field(..., min_length=1)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    """
    Обрабатывает заявки с сайта и отправляет их на email и в Telegram
    """
    method: str = event.get('httpMethod', 'GET')
    
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
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Метод не разрешен'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    contact_request = ContactRequest(**body_data)
    
    smtp_email = os.environ.get('SMTP_EMAIL')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    recipient_email = os.environ.get('RECIPIENT_EMAIL', '535243@gmail.com')
    telegram_bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта от {contact_request.name}'
    msg['From'] = smtp_email
    msg['To'] = recipient_email
    
    html_body = f"""
    <html>
      <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #D4AF37;">Новая заявка с сайта Золотое Кольцо</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <p><strong>Имя:</strong> {contact_request.name}</p>
          <p><strong>Телефон:</strong> {contact_request.phone}</p>
          <p><strong>Email:</strong> {contact_request.email}</p>
          <p><strong>Сообщение:</strong></p>
          <p style="background: white; padding: 15px; border-radius: 4px;">{contact_request.message}</p>
        </div>
      </body>
    </html>
    """
    
    msg.attach(MIMEText(html_body, 'html'))
    
    # Отправка на email
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(smtp_email, smtp_password)
        server.send_message(msg)
    
    # Отправка в Telegram
    if telegram_bot_token and telegram_chat_id:
        telegram_message = f"""🔔 <b>Новая заявка с сайта</b>

👤 <b>Имя:</b> {contact_request.name}
📱 <b>Телефон:</b> {contact_request.phone}
📧 <b>Email:</b> {contact_request.email}

💬 <b>Сообщение:</b>
{contact_request.message}"""
        
        telegram_url = f"https://api.telegram.org/bot{telegram_bot_token}/sendMessage"
        telegram_payload = {
            'chat_id': telegram_chat_id,
            'text': telegram_message,
            'parse_mode': 'HTML'
        }
        requests.post(telegram_url, json=telegram_payload)
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': True,
            'message': 'Заявка успешно отправлена'
        }),
        'isBase64Encoded': False
    }