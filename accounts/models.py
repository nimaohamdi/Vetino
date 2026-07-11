from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('national_id', '0000000000')
        return self.create_user(username, email, password, **extra_fields)


class CustomUser(AbstractUser):
    """Custom User model for Veterinary and Pet Shop System"""
    
    USER_TYPE_CHOICES = (
        ('pet_owner', 'Pet Owner'),
        ('veterinarian', 'Veterinarian'),
        ('shop_admin', 'Pet Shop Admin'),
        ('clinic_admin', 'Clinic Admin'),
    )
    
    user_type = models.CharField(
        max_length=20, 
        choices=USER_TYPE_CHOICES, 
        default='pet_owner',
        verbose_name='User Type'
    )
    phone_number = models.CharField(max_length=11, blank=True, verbose_name='Phone Number')
    national_id = models.CharField(max_length=10, blank=True, unique=True, verbose_name='National ID')
    address = models.TextField(blank=True, verbose_name='Address')
    profile_picture = models.ImageField(upload_to='profiles/', blank=True, null=True, verbose_name='Profile Picture')
    
    objects = CustomUserManager()

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return f"{self.username} ({self.get_user_type_display()})"