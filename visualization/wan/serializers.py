# import serializer from rest_framework
from rest_framework import serializers

# import model from models.py
from .models import table2

# Create a model serializer
class table2Serializer(serializers.HyperlinkedModelSerializer):
    # specify model and fields
    class Meta:
        model = table2Model
        fields = ('name', 'description')