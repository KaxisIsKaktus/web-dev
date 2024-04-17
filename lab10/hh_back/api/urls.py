from django.urls import path
from api import views

urlpatterns = [
    path("companies/", views.company_list),
    path("companies/<int:id>/", views.company_details),
    path("companies/<int:id>/vacancies/", views.company_vacancies),
    path("vacancies/", views.vacancy_list),
    path("vacancies/<int:id>", views.vacancy_details),
    path("vacancies/top_ten/", views.vacany_top_ten),
]