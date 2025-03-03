from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from myapp.models import ContactInfo

@api_view(['POST'])
def submit_contato(request):
    name = request.data.get('name')
    email = request.data.get('email')
    phone = request.data.get('phone')
    message = request.data.get('message')
    
    if not name or not email or not message:\
        return Response({"error": "Missing requirements! name, email, message are mandatory fields. "},
                 status = status.HTTP_400_BAD_REQUEST) 
        
    
    contactInfo = ContactInfo.objects.create(
        name = name,
        email = email,
        phone = phone,
        message = message,
    )
    
    return Response({"success": "Sua mensagem foi enviada com sucesso."}, status= status.HTTP_201_CREATED)