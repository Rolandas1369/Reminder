from django.urls import path
from . import views


app_name = 'items'
urlpatterns = [
    path('items/',
        views.ItemListView.as_view(),
        name='item_list'),
    path('items/<pk>/',
        views.ItemDetailView.as_view(),
        name='item_detail'),
]