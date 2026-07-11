from django.contrib import admin
from .models import Clinic, VetProfile

@admin.register(Clinic)
class ClinicAdmin(admin.ModelAdmin):
    list_display = ['name', 'owner', 'phone', 'is_active']
    list_filter = ['is_active']
    search_fields = ['name', 'address']

@admin.register(VetProfile)
class VetProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'clinic', 'specialty']
    list_filter = ['clinic']