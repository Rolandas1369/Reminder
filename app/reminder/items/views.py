from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import ItemSerializer      # add this
from .models import Item                     # add this

class ItemView(viewsets.ModelViewSet):       # add this
    serializer_class = ItemSerializer          # add this
    queryset = Item.objects.all()          