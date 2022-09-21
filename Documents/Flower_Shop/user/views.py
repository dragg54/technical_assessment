from django.http import HttpResponse
from django.shortcuts import render

from user import forms
from user.forms import ProfileForm


def profile(request):
    if request.method == "POST":
        form = ProfileForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get("username")
            form.save()
            return HttpResponse("hello")
    else:
        form = ProfileForm()
    return render(request, "user/signup.html", {"form": form})
