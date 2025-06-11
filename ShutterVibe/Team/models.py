from django.db import models

# Create your models here.
class Person(models.Model):
    FullName = models.TextField("Полное имя")
    Age = models.IntegerField("Возраст")
    Profession = models.TextField("Профессия")
    Image = models.ImageField(upload_to="photo/%Y/%m/%d")