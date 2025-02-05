# myapp/urls.py
from django.urls import path
from django.shortcuts import render
# from . import views

def index(request):
    return render(request, 'index.html')  # index.html을 렌더링

urlpatterns = [
    path('', index, name='index'),
    path('CounterPage', index, name='counter_page'),  # 경로 정의

]