from django.contrib import admin
from .models import Pet

@admin.register(Pet)
class PetAdmin(admin.ModelAdmin):
    list_display = ['name', 'owner', 'species', 'age_months']
    list_filter = ['species']
    search_fields = ['name', 'owner__username']