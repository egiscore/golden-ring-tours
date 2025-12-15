import json
import urllib.request
import urllib.error
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    """
    Определяет город посетителя по IP через API ip-api.com
    """
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Метод не разрешен'}),
            'isBase64Encoded': False
        }
    
    request_context = event.get('requestContext', {})
    identity = request_context.get('identity', {})
    ip = identity.get('sourceIp', 'unknown')
    
    city = 'Москва'
    country = 'RU'
    
    if ip != 'unknown' and ip:
        try:
            req = urllib.request.Request(
                f'http://ip-api.com/json/{ip}?lang=ru&fields=status,country,countryCode,city',
                headers={'User-Agent': 'Mozilla/5.0'}
            )
            with urllib.request.urlopen(req, timeout=3) as response:
                data = json.loads(response.read().decode('utf-8'))
                print(f"IP: {ip}, API Response: {data}")
                
                if data.get('status') == 'success':
                    if 'city' in data and data['city']:
                        city = data['city']
                    if 'countryCode' in data and data['countryCode']:
                        country = data['countryCode']
        except Exception as e:
            print(f"Geolocation error for IP {ip}: {str(e)}")
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=3600'
        },
        'body': json.dumps({
            'city': city,
            'country': country,
            'ip': ip
        }, ensure_ascii=False),
        'isBase64Encoded': False
    }