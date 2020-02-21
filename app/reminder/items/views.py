from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import ItemSerializer      # add this
from .models import Item                     # add this
from rest_framework import generics


class ItemList(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
