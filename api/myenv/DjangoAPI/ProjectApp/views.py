from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from ProjectApp.models import Project
from ProjectApp.serializers import ProjectSerializer


# Manipulando as API's para que seja possível carregar, inserir, editar e deletar.
@csrf_exempt
def ProjectAPI(request, id=0):
    if request.method == 'GET':
        projects = Project.objects.all()
        projects_serializer = ProjectSerializer(projects, many=True)
        return JsonResponse(projects_serializer.data, safe=False)
    elif request.method == 'POST':
        project_data = JSONParser().parse(request)
        project_serializer = ProjectSerializer(data=project_data)
        if project_serializer.is_valid():
            project_serializer.save()
            return JsonResponse("Added Sucessfully!!", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    elif request.method == 'PUT':
        project_data = JSONParser().parse(request)
        project = Project.objects.get(ProjectID=project_data['ProjectID'])
        project_serializer = ProjectSerializer(project, data=project_data)
        if project_serializer.is_valid():
            project_serializer.save()
            return JsonResponse("Updated Sucessfully!!", safe=False)
        return JsonResponse("Failed to Update", safe=False)

    elif request.method == 'DELETE':
        project = Project.objects.get(ProjectID=id)
        project.delete()
        return JsonResponse("Deleted suceffully!!", safe=False)
