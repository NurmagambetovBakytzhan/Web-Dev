from django.db.models import Max
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from . import models, serializers


# Create your views here.
class CompanyViewSet(ModelViewSet):
    queryset = models.Company.objects.all()
    serializer_class = serializers.CompanyModelSerializer


class VacancyViewSet(ModelViewSet):
    queryset = models.Vacancy.objects.all()
    serializer_class = serializers.VacancyModelSerializer


@api_view(['GET'])
def get_vacancy_by_company_id(request, *args, **kwargs):
    vacancies = models.Vacancy.objects.filter(company_id=kwargs['pk'])

    serializer = serializers.VacancyModelSerializer(vacancies, many=True).data
    return Response(serializer)


@api_view(['GET'])
def get_top_ten_vacancies(request, *args, **kwargs):
    top_salaries = models.Vacancy.objects.annotate(max_salary=Max('salary')).order_by('-max_salary')[:10]
    serializer = serializers.VacancyModelSerializer(top_salaries, many=True).data
    return Response(serializer)
