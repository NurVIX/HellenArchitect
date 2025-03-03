from django.db import models

class ContactInfo(models.Model):
    name = models.CharField(max_length = 200)
    email = models.EmailField()
    phone = models.CharField(max_length=15, blank= True, null = True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    
    def __str__(self):
        return f"{self.name} - {self.email}"
    