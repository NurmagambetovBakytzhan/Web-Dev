import uuid

from django.db import models


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)


class Product(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    category = models.ForeignKey(
        to=Category,
        on_delete=models.CASCADE,
        related_name='products'
    )
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    amount = models.IntegerField()
    is_active = models.BooleanField()

    def __str__(self):
        return self.name
