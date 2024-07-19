from django.shortcuts import render, HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets

import requests, json

from .models import table2

from django.http import JsonResponse


# from .models import YourModel  # Import your model

# Create your views here.

def get_data(request):
    # Query your data from the model or any other source

    data = table2.objects.all()  # Replace with your query

    # Serialize the data to JSON
    serialized_data = [{'field1': item.field1, 'field2': item.field2} for item in data]

    return JsonResponse({'data': serialized_data})


def index(request):
    return render(request, 'index.html')

def radar(request):
    return render(request, 'radar.html')