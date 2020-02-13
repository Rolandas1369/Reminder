from django.db import models

# Create your models here.
class Item(models.Model):

    related_to = models.CharField(max_length=100, blank=True, default='')
    name = models.CharField(max_length=100, blank=True, default='')