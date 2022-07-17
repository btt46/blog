from django.shortcuts import render
from django.http import JsonResponse 


# Create your views here.


def render_react(request):
    return render(request, "index.html")
    