# Create your views here.
from django.http import HttpResponse
from django.template import Context, loader

def index(request):
    template = loader.get_template("garbage_game/engine/UsedCoffeeCup.html")
    return HttpResponse(template.render())
