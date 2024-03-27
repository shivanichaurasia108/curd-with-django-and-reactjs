from rest_framework import serializers
from .models import ContactModel

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactModel
        fields = ['id', 'full_name', 'subject', 'mob_num', 'email_id', 'message'] 