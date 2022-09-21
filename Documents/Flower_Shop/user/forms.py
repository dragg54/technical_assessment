from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.forms import PasswordInput


class ProfileForm(UserCreationForm):
    username = forms.CharField(label='', widget=forms.TextInput(attrs={'placeholder': 'Username'}))
    email = forms.EmailField(label='', widget=forms.TextInput(attrs={'placeholder': 'Email'}))
    password2 = forms.CharField(label='', widget=forms.TextInput(attrs={'placeholder': 'Password'}))

    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2"]

    def __init__(self, *args, **kwargs):
        super(UserCreationForm, self).__init__(*args, **kwargs)
        self.fields["password1"].help_text = None
        self.fields["password2"].help_text = None
        self.fields["username"].help_text = None
        self.fields["password1"].label = ""
        self.fields["password1"].widget = PasswordInput(attrs={"placeholder": "Enter Password"})
        self.fields["password2"].widget = PasswordInput(attrs={"placeholder": "Confirm your password"})
