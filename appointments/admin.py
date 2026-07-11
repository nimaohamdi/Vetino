from django.contrib import admin
from .models import Appointment

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ['pet', 'vet', 'appointment_date', 'status']
    list_filter = ['status', 'clinic']
    search_fields = ['pet__name', 'owner__username']
    date_hierarchy = 'appointment_date'