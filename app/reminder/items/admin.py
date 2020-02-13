from django.contrib import admin

# Register your models here.
from .models import Item # add this

class ItemAdmin(admin.ModelAdmin):  # add this
    list_display = ('related_to', 'name') # add this

    # Register your models here.
admin.site.register(Item, ItemAdmin) # add this