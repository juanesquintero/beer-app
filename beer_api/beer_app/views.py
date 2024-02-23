from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Beer
from .serializers import BeerSerializer


@api_view(['GET'])
def list_beers(request):
    beers = Beer.objects.all()
    serializer = BeerSerializer(beers, many=True)
    return Response(serializer.data)
