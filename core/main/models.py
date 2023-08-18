from django.db import models

class Producto(models.Model):
    nombre_art = models.CharField(max_length=100)
    colores = models.IntegerField()
    imagen_1 = models.ImageField(upload_to='productos/')
    imagen_2 = models.ImageField(upload_to='productos/')
    precio = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nombre_art
