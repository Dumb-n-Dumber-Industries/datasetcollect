from django.shortcuts import render
from .models import DataSetText
from django.http import HttpResponse, JsonResponse
import random
# Create your views here.

def hello(request):
    return render(request, 'hello.html', {'text': DataSetText.objects.get(pk=1)})
def home(request):
    size = DataSetText.objects.count()
    factor = float(request.GET.get("selector"))
    index = random.randint(1, size)
    text = DataSetText.objects.get(pk=index)
    return render(request, 'index.html', {'text':text, 'selector': factor})

def change(request):
    if request.method == 'GET':
        choice = int(request.GET.get('to_change', 0))
        Emo = int(request.GET.get('state[Emo]', 0))
        Neu = int(request.GET.get('state[Neu]', 0))
        Obj = int(request.GET.get('state[Obj]', 0))
        Sub = int(request.GET.get('state[Sub]', 0))
        factor = float(request.GET['factor'])
        index = request.GET['text_id']
        size = DataSetText.objects.count()
        text = DataSetText.objects.get(pk=index)
        if Emo == 1:
            text.rating += 1 * factor
        if Neu == 1:
            text.rating -= 1 * factor
        if Obj == 1:
            text.is_estimated += 1 * factor
        if Sub == 1:
            text.is_estimated -= 1 * factor
        if choice == 5:
            text.is_garbage += 1
        text.save()
        b = random.randint(1, size)
        a = DataSetText.objects.get(pk=b)
        return JsonResponse({'text':a.text, 'index':int(b)})

