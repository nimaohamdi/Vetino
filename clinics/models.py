from django.db import models
from accounts.models import CustomUser

class Clinic(models.Model):
    name = models.CharField(max_length=200)
    address = models.TextField()
    phone = models.CharField(max_length=15)
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='owned_clinics')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Clinic"
        verbose_name_plural = "Clinics"


class VetProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    clinic = models.ForeignKey(Clinic, on_delete=models.CASCADE, related_name='vets')
    specialty = models.CharField(max_length=100)
    bio = models.TextField(blank=True)

    def __str__(self):
        return f"Dr. {self.user.username} - {self.specialty}"