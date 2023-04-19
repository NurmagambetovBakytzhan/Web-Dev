from django.db import models


# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    city = models.CharField(max_length=50)
    address = models.TextField()

    def __str__(self):
        return self.name


class Vacancy(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(
        to=Company,
        on_delete=models.RESTRICT
    )


    def __str__(self):
        return self.name
