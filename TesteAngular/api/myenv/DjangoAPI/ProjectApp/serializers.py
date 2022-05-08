from dataclasses import field
from rest_framework import serializers
from ProjectApp.models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('ProjectID',
                  'ProjectName',
                  'ProjectBegin', 
                  'ProjectEnd', 
                  'ProjectValue', 
                  'ProjectRisk', 
                  'ProjectPeople')