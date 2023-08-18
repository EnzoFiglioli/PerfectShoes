from django.shortcuts import render
from .models import Producto
def home(request):
    return render(request,'home.html')

def productos(request):
    zapas = Producto.objects.all()
    context = {
        'zapas':zapas
    }
    return render(request,'productos.html', context)