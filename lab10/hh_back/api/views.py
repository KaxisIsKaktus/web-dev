from django.http.response import JsonResponse
from django.shortcuts import get_object_or_404
from django.views import View

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer

def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)

    return JsonResponse(serializer.data, safe=False, status=200)

def company_details(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=404)
    
    serializer = CompanySerializer(company)

    return JsonResponse(serializer.data, safe=False ,status=200)

class CompanyVacanciesView(View):
    def get(self, request, id):
        company = get_object_or_404(Company, id=id)
        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

class VacancyListView(View):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

class VacancyDetailsView(View):
    def get(self, request, id):
        vacancy = get_object_or_404(Vacancy, id=id)
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data, safe=False, status=200)

class VacancyTopTenView(View):
    def get(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

