from django.db import models

# Create your models here.

# Criando a classe e os metodos que serviram como base para receber os dados dos projetos


class Project(models.Model):
    ProjectID = models.AutoField(primary_key=True)
    ProjectName = models.CharField(max_length=100)
    ProjectBegin = models.DateField()
    ProjectEnd = models.DateField()
    ProjectValue = models.FloatField()
    ProjectRisk = models.IntegerField()
    ProjectPeople = models.CharField(max_length=1000)
