from django.urls import path
from . import views

urlpatterns = [
    path("/api/add-items", views.add_items, name="add-items"),
]
