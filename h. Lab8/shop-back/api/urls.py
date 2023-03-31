from django.urls import path
from rest_framework.routers import DefaultRouter

from api import views


router = DefaultRouter()
router.register(r'products', views.ProductViewSet)
router.register(r'categories', views.CategoryViewSet)

urlpatterns = router.urls
urlpatterns.append(path(r'categories/<int:pk>/products/', views.get_product_by_category_id))


# urlpatterns = [
#     path('products/', views.get_products),
#     path('products/<int:id>/', views.get_product),
#     path('categories/', views.get_categories),
#     path('categories/<int:id>/', views.get_category),
#     path('categories/<int:id>/products', views.get_product_by_category_id)
#
# ]

