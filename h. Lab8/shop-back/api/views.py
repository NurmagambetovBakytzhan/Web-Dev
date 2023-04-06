from django.db.migrations import serializer
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view

from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from api import models, serializers
from django.shortcuts import get_object_or_404


# Create your views here.


class ProductViewSet(ModelViewSet):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductModelSerializer


class CategoryViewSet(ModelViewSet):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategoryModelSerializer


@api_view(['GET'])
def get_product_by_category_id(request, *args, **kwargs):
    category = models.Category.objects.get(**kwargs)
    products = category.objects.all()
    serializer = serializers.ProductModelSerializer(products, many=True).data
    return Response(serializer)

# def get_categories(request, *args, **kwargs):
#     categories = models.Category.objects.all()
#     cats_json = [c.to_json() for c in categories]
#
#     return Response(serializer)
#
#
# def get_category(request, *args, **kwargs):
#     category = models.Category.objects.get(id=kwargs['id'])
#     serializer = serializers.serializers.CategoryModelSerializer
#
#     return Response(serializer)
#
#
#
# def get_products(request, *args, **kwargs):
#     products = models.Product.objects.all()
#     serializer = serializers.ProductModelSerializer
#
#     return Response(serializer, many= True)
#
#
# def get_product(request, *args, **kwargs):
#     product = models.Product.objects.get(id=kwargs['id'])
#     serializer = serializers.ProductModelSerializer
#
#     return Response(serializer)
