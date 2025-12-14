import json
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    """
    Определяет город посетителя по IP через заголовки запроса
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
    
    headers = event.get('headers', {})
    request_context = event.get('requestContext', {})
    identity = request_context.get('identity', {})
    
    city = headers.get('cf-ipcity') or headers.get('x-vercel-ip-city') or 'Москва'
    country = headers.get('cf-ipcountry') or headers.get('x-vercel-ip-country') or 'RU'
    ip = identity.get('sourceIp', 'unknown')
    
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
