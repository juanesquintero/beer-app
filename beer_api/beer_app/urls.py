from django.urls import path
from . import views

urlpatterns = [
    path('beers/', views.list_beers, name='list_beers'),
    path('account/', views.list_accounts, name='get_account'),
    path('order/', views.receive_order, name='receive_order'),
    path('pay/', views.pay_bill, name='pay_bill'),
]
