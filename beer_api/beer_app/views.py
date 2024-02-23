from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


# Save beers, orders, account in memory for simplicity
orders = []
account = {"John": 0, "Robert": 0, "Mary": 0}
beers = [
    {"id": 1, "name": "Corona", "price": 3.99},
    {"id": 2, "name": "Budweiser", "price": 2.99},
    {"id": 3, "name": "Club Colombia", "price": 1.99}
]


@api_view(['GET'])
def list_beers(request):
    return Response(beers)


@api_view(['GET'])
def list_orders(request):
    return Response(orders)


@api_view(['GET'])
def show_account(request):
    return Response(account)


@api_view(['POST'])
def recieve_order(request):
    friend = request.data.get('friend')
    beer_id = request.data.get('beer_id')
    quantity = request.data.get('quantity', 1)

    # Look for the beer selected
    beer = next((beer for beer in beers if beer["id"] == beer_id), None)

    if beer:
        total = beer.get("price") * quantity

        # Update the friend's account
        if friend in account:
            account[friend] += total
        else:
            account[friend] = total

        # Add the order
        orders.append({
            "friend": friend,
            "beer": beer,
            "quantity": quantity,
            "total": total,
        })

        return Response({"message": "Order received successfully."}, status=201)

    return Response({"message": "Beer not found."}, status=404)


@api_view(['POST'])
def pay_bill(request):
    friend = request.data.get('friend')
    amount = request.data.get('amount')
    split_bill = request.data.get('splitEvenly', False)

    # Check if friend exists
    if not friend in account:
        return Response({"message": "Friend not exists in account"}, status=404)

    # Check if the bill is going to be split evenly
    if split_bill:
        total_due = sum(account.values())
        even_amount = total_due / len(account)
        for f in account:
            account[f] = even_amount
    else:
        if account[friend] >= amount:
            account[friend] -= amount
        else:
            return Response({"message": "Amount exceeds owed account"}, status=400)

    return Response({"message": f"{friend} paid {amount}, owed {account[friend]}"})
