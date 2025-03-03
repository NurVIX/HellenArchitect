from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='index'),
    path('about/', views.About, name='about'),
    path('Escritorio/', views.Escritorio, name='escritorio'),
    path('Pousada/', views.Pousada, name='pousada'),
    path('Mostras/', views.Mostras, name='mostras'),
    path('Arquitetura/', views.Arquitetura, name='arquitetura'),
    path('Interiores/',views.Interiores, name='inte riores'),
    path('Quartos/', views.Quartos, name='quartos'),
    path('Outros/', views.Outros, name='outros'),
    path('Office/', views.Office, name='Office'),
    path('Cozinha/', views.Cozinha, name='cozinha'),
    path('Gourmet/', views.Gourmet, name='gourmet'),
    path('Sala/', views.Sala, name='sala'),
    path('Banheiro/', views.Banheiro, name='banheiro'),    
    path('contato/', views.Contato, name='contato'),
]