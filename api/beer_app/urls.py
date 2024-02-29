from django.urls import path
from . import views

urlpatterns = [
    path('beers/', views.list_beers, name='list_beers'),
    path('orders/', views.list_orders, name='list_orders'),
    path('account/', views.show_account, name='show_account'),
    path('friends/', views.list_friends, name='list_friends'),
    path('order/', views.recieve_order, name='recieve_order'),
    path('pay/', views.pay_bill, name='pay_bill'),
]
