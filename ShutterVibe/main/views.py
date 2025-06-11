from django.shortcuts import render
from Shop.models import *
# Create your views here.
def index(request):
    list = product.objects.all()
    return render(request, 'Index.html', { 'list' : list })