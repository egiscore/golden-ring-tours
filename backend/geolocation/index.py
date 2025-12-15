import json
import urllib.request
import urllib.error
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    """
    Определяет город посетителя по IP через API ipapi.co
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
    
    if ip != 'unknown':
        try:
            req = urllib.request.Request(
                f'https://ipapi.co/{ip}/json/',
                headers={'User-Agent': 'Mozilla/5.0'}
            )
            with urllib.request.urlopen(req, timeout=2) as response:
                data = json.loads(response.read().decode('utf-8'))
                city = data.get('city', 'Москва')
                country = data.get('country_code', 'RU')
        except (urllib.error.URLError, urllib.error.HTTPError, json.JSONDecodeError, TimeoutError):
            pass
    
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