from django.shortcuts import render

def home(request):
    return render(request, 'home.html')


def About(request):
    return render(request, 'about.html')

def Escritorio(request):
    return render(request, "escritorio.html")

def Pousada(request):
    return render(request, "pousada.html")

def Mostras(request):
    return render(request, 'mostras.html')

def Arquitetura(request):
    return render(request, "arquitetura.html") 

def Interiores(request):
    return  render(request, "interiores.html")

def Quartos(request):
    return render(request, "quartos.html")

def Outros(request):
    return render(request, "outros.html")

def Office(request):
    return render(request, 'office.hmtl')

def Cozinha(request):
    return render(request, "cozinha.html")

def Gourmet(request):
    return render(request, "Gourmet.html")

def Sala(request):
    return render(request, "Sala.html")

def Banheiro(request):
    return render(request, "Banheiro.html")

def Contato(request):
    
    return render(request, "Contato.html")

