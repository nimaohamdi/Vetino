from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = ['username', 'email', 'user_type', 'phone_number', 'is_staff']
    list_filter = ['user_type', 'is_staff']
    search_fields = ['username', 'email', 'phone_number']