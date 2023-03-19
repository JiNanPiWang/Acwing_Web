from django.urls import path, include
from my_website.views.index import index

urlpatterns = [
    path("", index, name="index")
]