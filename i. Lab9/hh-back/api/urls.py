from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'companies', views.CompanyViewSet)
router.register(r'vacancies', views.VacancyViewSet)

urlpatterns = router.urls


urlpatterns.append(path(r'companies/<int:pk>/vacancies/', views.get_vacancy_by_company_id))
# urlpatterns.append(path(r'vacancies/top_ten/', views.get_top_ten_vacancies))
