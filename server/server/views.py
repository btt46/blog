from django.middleware.csrf import get_token
from django.http import JsonResponse 
from django.views.decorators.csrf import csrf_exempt
import json
from blog.models import *
import base64
from .settings import MEDIA_ROOT
import os


@csrf_exempt
def create_contact(request):
    if request.method == 'POST': 
        print("debug", request.body)
        data = json.loads(request.body)
        print(data)
        name = data['name'] 
        email = data['email'] 
        message = data['message']
        print(name, email, message)
        Contact.objects.create(name=name, email=email, message=message)
    return JsonResponse({"status": 'Success'}) 

def convert_blog2json(blog_posts):
        res = []
        for i in range(len(blog_posts)-1, -1, -1):
            post = blog_posts[i]
            created_date = post.created_at.date().strftime("%d %b %Y ")
            #print(os.path.join(MEDIA_ROOT,str(post.coverImage.name)))
            image_data = None
            if post.coverImage.name != "":
                with open(os.path.join(MEDIA_ROOT, post.coverImage.name), "rb") as image_file:
                    image_data = base64.b64encode(image_file.read()).decode('utf-8')
                    image_file.close()
            post_json = {
                        'topic': post.topic,
                        'content': post.content,
                        'exceprt': post.exceprtion,
                        'coverImage': image_data,
                        'createdDate': created_date,
                }

                #res.append(json.dumps(post_json))
            res.append(post_json)
        return res

@csrf_exempt
def get_posts(request): 
        if request.method == 'GET':
                print("debug", request.body)
                blog_posts = BlogPost.objects.all()
                print(blog_posts)
                print(convert_blog2json(blog_posts))
        return JsonResponse({"status": "Success","data": convert_blog2json(blog_posts)})
        

def csrf_view(request):
    return JsonResponse({'token': get_token(request)})

def ping_view(request):
    return JsonResponse({'result': True})
