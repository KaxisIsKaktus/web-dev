from django.urls import path
from api import views

urlpatterns = [
    path("companies/", views.company_list),
    path("companies/<int:id>/", views.company_details),
    path("companies/<int:id>/vacancies/", views.CompanyVacanciesView.as_view()),
    path("vacancies/", views.VacancyListView.as_view()),
    path("vacancies/<int:id>", views.VacancyDetailsView.as_view()),
    path("vacancies/top_ten/", views.VacancyTopTenView.as_view()),
]