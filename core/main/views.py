import locale
from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import DetailView
from .models import Zapatilla, Carrito, DetallesCarrito, Favorito


def home(request):
    zapatillas = Zapatilla.objects.all()
    
    locale.setlocale(locale.LC_ALL, 'es_ES.UTF-8')
    for x in zapatillas:
        x.formatted_price = locale.format_string('%.2f', x.precio, grouping=True)
    context = {
        'zapatillas': zapatillas
    }
    return render(request, 'home.html', context)

def productos(request):        
    zapas = Zapatilla.objects.all()
    context = {
        'zapas': zapas
    }
    
    locale.setlocale(locale.LC_ALL, 'es_ES.UTF-8')

    for x in zapas:
        x.formatted_price = locale.format_string('%.2f', x.precio, grouping=True)

    return render(request, 'productos.html', context)

class DetallesProducto(DetailView):
    model = Zapatilla
    template_name = 'detalle-producto.html'
    context_object_name = 'producto'


from django.db.models import Q

def search(request):
    search_term = request.GET.get('search', '')
    resultados = Zapatilla.objects.filter(Q(nombre__icontains=search_term) | Q(precio__icontains=search_term)| Q (id__icontains=search_term))
    
    data = {
        'resultados': list(resultados.values('nombre', 'imagen', 'pk'))
    }
    return JsonResponse(data)


def login (request):
    return render(request, 'login.html')