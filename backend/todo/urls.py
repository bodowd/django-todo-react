from django.urls import path
from .views import ListCreateTodos, RetrieveUpdateDestroyTodos

urlpatterns = [
    path('todos/', ListCreateTodos.as_view()),
    path('todos/<int:pk>/', RetrieveUpdateDestroyTodos.as_view())
]