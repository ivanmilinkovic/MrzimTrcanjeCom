from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import Post

import json

@csrf_exempt
def home(request):
    if request.is_ajax():
        print json.loads(request.body)
    post = Post.objects.order_by('-date')[:1]
    text = post[0].text.split('\n')
    text = ['{}<br>'.format(item) for item in text]
    context = {'title': post[0].title, 'text': text}
    return render(request, 'home.html', context)



