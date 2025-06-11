from django.db import models

# Create your models here.
class product(models.Model):
    Name = models.TextField("Название", max_length=80)
    About = models.TextField("Описание")
    ProductImage = models.ImageField(upload_to="photo/%Y/%m/%d")