from django.shortcuts import render
from rest_framework import serializers
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import TodoSerializer
from .models import Todo

# class TodoView(viewsets.ModelViewSet):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer

# class ListTodos(APIView):
#     def get(self, request, format=None):
#         todos = [t for t in Todo.objects.all()]
#         return Response(todos)

class ListCreateTodos(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class RetrieveUpdateDestroyTodos(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer