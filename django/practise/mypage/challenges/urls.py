from django.urls import path
from . import views

urlpatterns = [
    path("<int:month>", views.challenge_by_number),
    path("<str:month>", views.challenge_by_name),
]
