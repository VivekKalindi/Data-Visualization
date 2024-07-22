from django.contrib import admin
from django.urls import path
from wan import views


urlpatterns = [

    path("", views.index, name='index'),
    path("radar", views.radar, name='radar'),

    path('api/data/', views.table2, name='table2'),

]
