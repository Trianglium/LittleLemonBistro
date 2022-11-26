from django.test import TestCase
from .models import Booking, Menu
from .menu_data import menu_item_data


class BookingModelTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.book = Booking.objects.create(first_name="Jane", last_name="Doe", guest_number=1, comment="Booking Test")
    
    def test_first_name(self):
        self.assertEquals(self.book.name, "Jane")

    def test_last_name(self):
        self.assertEquals(self.book.name, "Doe")

    def test_guest_number(self):
        self.assertEquals(self.book.guest_number, 1)

    def test_comment(self):
        self.assertEquals(self.book.comment, "Booking Test")


class MenuModelTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.data = menu_item_data[0]
        cls.menu_item = Menu.objects.create(name="Greek salad", price=12, menu_item_description="Our famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese. Garnished with crispy onion and salty capers.")

    def test_name(self):
        self.assertEquals(self.menu_item.name, "Greek salad")
    
    def test_price(self):
        self.assertEquals(self.menu_item.price, 12)
    
    def test_menu_item_description(self):
        self.assertEquals(self.menu_item.menu_item_description, "Our famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese. Garnished with crispy onion and salty capers.")