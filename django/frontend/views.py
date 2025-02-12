from django.shortcuts import render

# Create your views here.
# frontend/views.py

# 기본 뷰 페이지
def home(request):
    return render(request, 'home.html')

def angular(request):
    return render(request, 'angular/index.html')

def react(request):
    return render(request, 'react/index.html')

def vue(request):
    return render(request, 'vue/index.html')


