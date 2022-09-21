from django.db import models


class Items(models.Model):
    objects = None
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=100)

    def __str__(self):
        return self.name

