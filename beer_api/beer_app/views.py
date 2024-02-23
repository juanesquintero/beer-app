from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Beer
from .serializers import BeerSerializer


# Save beers, orders, accounts in memory for simplicity
orders = []
accounts = {"Friend1": 0, "Friend2": 0, "Friend3": 0}
beers = [
    {"id": 1, "name": "Corona", "price": 3.99},
    {"id": 2, "name": "Budweiser", "price": 2.99},
    {"id": 3, "name": "Club Colombia", "price": 1.99}
]


@api_view(['GET'])
def list_beers(request):
    beers = Beer.objects.all()
    serializer = BeerSerializer(beers, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def list_accounts(request):
    return Response(accounts)


@api_view(['POST'])
def receive_order(request):
    friend_name = request.data.get('friend')
    beer_id = request.data.get('beerId')
    quantity = request.data.get('quantity', 1)

    beer = next((beer for beer in beers if beer["id"] == beer_id), None)

    if beer:
        total_cost = beer.get("price") * quantity

        # Update the friend's account balance
        if friend_name in accounts:
            accounts[friend_name] += total_cost
        else:
            accounts[friend_name] = total_cost

        # Add the order to the in-memory list of orders
        orders.append({
            "friend": friend_name,
            "beer_id": beer_id,
            "quantity": quantity,
            "total_cost": total_cost
        })

        return Response({"message": "Order received successfully."}, status=201)

    return Response({"message": "Beer not found."}, status=404)


@api_view(['POST'])
def pay_bill(request):
    return Response({})
