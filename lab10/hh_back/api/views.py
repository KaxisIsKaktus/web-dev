from django.shortcuts import render
from django.http.response import JsonResponse

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer

# Create your views here.
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

def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=404)
    
    vacancies = Vacancy.objects.filter(company=company)
    serializer = VacancySerializer(vacancies, many=True)

    return JsonResponse(serializer.data, safe=False, status=200)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)

    return JsonResponse(serializer.data, safe=False, status=200)

def vacancy_details(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=404)
    
    serializer = VacancySerializer(vacancy)

    return JsonResponse(serializer.data, safe=False, status=200)

def vacany_top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)

    return JsonResponse(serializer.data, safe=False, status=200)
