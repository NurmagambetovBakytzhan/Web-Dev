from rest_framework import serializers

from api import models


class ProductModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Product
        fields = '__all__'


class CategoryModelSerializer(serializers.ModelSerializer):

    class Meta:

        model = models.Category
        fields = '__all__'