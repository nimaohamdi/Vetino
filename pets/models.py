from django.db import models
from accounts.models import CustomUser

class Pet(models.Model):
    SPECIES_CHOICES = (
        ('dog', 'Dog'),
        ('cat', 'Cat'),
        ('bird', 'Bird'),
        ('rabbit', 'Rabbit'),
        ('other', 'Other'),
    )

    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='pets')
    name = models.CharField(max_length=100)
    species = models.CharField(max_length=20, choices=SPECIES_CHOICES)
    breed = models.CharField(max_length=100, blank=True)
    age_months = models.PositiveIntegerField()
    weight_kg = models.FloatField(null=True, blank=True)
    medical_notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.owner.username})"

    class Meta:
        verbose_name = "Pet"
        verbose_name_plural = "Pets"