from django.urls import path
from . import views

urlpatterns = [
    path('beers/', views.list_beers, name='list_beers'),
    path('order/', views.receive_order, name='receive_order'),
    path('account/', views.get_account, name='get_account'),
    path('pay/', views.pay_bill, name='pay_bill'),
]
