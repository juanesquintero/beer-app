from django.test import TestCase
from beer_app.models import Beer
# Create your tests here.


class BeerTestCase(TestCase):
    def setUp(self):
        Beer.objects.create(name="Aguila", price=2.65)
        Beer.objects.create(name="Poker", price=1.25)

    def test_beers_str_rep(self):
        poker = Beer.objects.get(name="Poker")
        self.assertIn(poker.name, str(poker))
        self.assertIn(str(poker.price), str(poker))

        aguila = Beer.objects.get(name="Aguila")
        self.assertIn(aguila.name, str(aguila))
        self.assertIn(str(aguila.price), str(aguila))
