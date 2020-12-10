from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return HttpResponse('<h1>Blog returned</h1>')


def about(request):
    return HttpResponse('<h1>You are on About page!</h1>')    
