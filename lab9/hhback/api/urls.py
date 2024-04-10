from django.urls import path
from api.views import companies_list, company_detail, company_vacancies, vacancies_list, vacancy_detail, top_ten_vacancies

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top_ten/', top_ten_vacancies),
]