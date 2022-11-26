from django.test import TestCase
from .models import Booking, Menu
from .menu_data import menu_item_data


# Book Page
class BookPageTests(SimpleTestCase):
    def test_url_pattern(self):
        response = self.client.get("/book/")
        self.assertEqual(response.status_code, 200)

    def test_url_name(self):
        response = self.client.get(reverse("book"))
        self.assertEqual(response.status_code, 200)

    def test_template_name(self):
        response = self.client.get(reverse("book"))
        self.assertTemplateUsed(response, "book.html")


# Booking Model
class BookingModelTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.book = Booking.objects.create(
            first_name="Jane", last_name="Doe", guest_number=1, comment="Booking Test"
        )

    def test_first_name(self):
        self.assertEquals(self.book.name, "Jane")

    def test_last_name(self):
        self.assertEquals(self.book.name, "Doe")

    def test_guest_number(self):
        self.assertEquals(self.book.guest_number, 1)

    def test_comment(self):
        self.assertEquals(self.book.comment, "Booking Test")


# Menu Model
class MenuModelTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.data = menu_item_data[0]
        cls.menu_item = Menu.objects.create(
            name="Greek salad",
            price=12,
            menu_item_description="Our famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese. Garnished with crispy onion and salty capers.",
        )

    def test_name(self):
        self.assertEquals(self.menu_item.name, "Greek salad")

    def test_price(self):
        self.assertEquals(self.menu_item.price, 12)

    def test_menu_item_description(self):
        self.assertEquals(
            self.menu_item.menu_item_description,
            "Our famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese. Garnished with crispy onion and salty capers.",
        )


# Menu Page
class MenuPageTests(SimpleTestCase):
    def test_url_pattern(self):
        response = self.client.get("/menu/")
        self.assertEqual(response.status_code, 200)

    def test_url_name(self):
        response = self.client.get(reverse("menu"))
        self.assertEqual(response.status_code, 200)

    def test_template_name(self):
        response = self.client.get(reverse("menu"))
        self.assertTemplateUsed(response, "menu.html")


# Menu Item Detail Page
class MenuItemPageTests(SimpleTestCase):
    def test_url_pattern(self):
        response = self.client.get("/menu_item/1/")
        self.assertEqual(response.status_code, 200)

    def test_url_name(self):
        response = self.client.get(reverse("menu_item"))
        self.assertEqual(response.status_code, 200)

    def test_template_name(self):
        response = self.client.get(reverse("menu_item"))
        self.assertTemplateUsed(response, "menu_item.html")


# Home Page
class HomePageTests(SimpleTestCase):
    def test_url_pattern(self):
        response = self.client.get("/home/")
        self.assertEqual(response.status_code, 200)

    def test_url_name(self):
        response = self.client.get(reverse("home"))
        self.assertEqual(response.status_code, 200)

    def test_template_name(self):
        response = self.client.get(reverse("home"))
        self.assertTemplateUsed(response, "index.html")


# About Page
class AboutPageTests(SimpleTestCase):
    def test_url_pattern(self):
        response = self.client.get("/about/")
        self.assertEqual(response.status_code, 200)

    def test_url_name(self):
        response = self.client.get(reverse("about"))
        self.assertEqual(response.status_code, 200)

    def test_template_name(self):
        response = self.client.get(reverse("about"))
        self.assertTemplateUsed(response, "about.html")
