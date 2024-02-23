from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Beer
from .serializers import BeerSerializer


# Save orders and accounts in memory for simplicity
orders = []
accounts = {"Friend1": 0, "Friend2": 0, "Friend3": 0}


@api_view(['GET'])
def list_beers(request):
    beers = Beer.objects.all()
    serializer = BeerSerializer(beers, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_account(request):
    return Response(accounts)
