from django.urls import re_path
from ProjectApp import views
# Criação de um Json para que seja aberta ao ir para a Json Projeto
urlpatterns = [
    re_path(r'^project/$', views.ProjectAPI),
    re_path(r'^project/([0-9]+)$', views.ProjectAPI)
]
