from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, redirect
from django.views.generic import CreateView

from .models import Items


def add_items(request):
    name = request.POST.get("name")
    price = request.POST.get("price")
    if name and price:
        items = Items.objects.create(name=name, price=price)
        return redirect("add-items")
    return render(request, "items/add-items.html")
