from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.get_all_products, name='product-list'),
    path('products/<int:id>/', views.get_product, name='product-detail'),
    path('categories/', views.get_all_categories, name='category-list'),
    path('categories/<int:id>/', views.get_category, name='category-detail'),
    path('categories/<int:id>/products/', views.get_category_products, name='category-products'),
]