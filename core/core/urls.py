from django.contrib import admin
from django.urls import path
from main.views import home, productos, DetallesProducto, search
urlpatterns = [
    path('admin/', admin.site.urls),
    path('inicio/', home, name="inicio" ),
    path('productos/', productos, name="productos"),
    path('producto/<int:pk>/', DetallesProducto.as_view(), name='detalles_producto'),
    path ('resultado/', search, name='search')
]
