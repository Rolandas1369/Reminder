from django.shortcuts import render
from rest_framework import generics          # add this
from .serializers import ItemSerializer      # add this
from .models import Item                     # add this

class ItemListView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemDetailView(generics.RetrieveAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer