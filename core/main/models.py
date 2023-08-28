from django.db import models
from django.contrib.auth.models import User

class Zapatilla(models.Model):
    nombre = models.CharField(max_length=100)
    marca = models.CharField(max_length=50)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    imagen = models.URLField(null=False)
    
    def __str__(self):
        return self.nombre

class Favorito(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    zapatillas = models.ForeignKey(Zapatilla, on_delete=models.CASCADE)

class Carrito(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

class DetallesCarrito(models.Model):
    carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE)
    zapatillas = models.ForeignKey(Zapatilla, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField()
