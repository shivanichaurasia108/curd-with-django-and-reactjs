from django.db import models

class ContactModel(models.Model):
    full_name = models.CharField(max_length=100)
    subject = models.CharField(max_length=200)
    mob_num = models.IntegerField()
    email_id = models.CharField(max_length=50)
    message = models.TextField()

    def __str__(self):
        return self.full_name
    