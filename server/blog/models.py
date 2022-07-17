from django.db import models
from markdownx.models import MarkdownxField
from django.utils import timezone
import markdown
# Create your models here.

class BlogPost(models.Model):
    topic = models.CharField(max_length=50)
    exceprtion = models.CharField(max_length=100)
    coverImage = models.ImageField(upload_to='users/%Y/%m/%d/', blank=True)
    content = models.TextField()
    created_at = models.DateTimeField( auto_now_add=True)
    updated_at = models.DateTimeField( auto_now=True)

    def __str__(self):
        return f' {self.topic}'

    def markdown_to_html(self):
        """Markdown を HTML に変換して出力
        さらに拡張機能を使用して目次を自動生成する"""
        md = markdown.Markdown(
            extensions=['extra', 'admonition', 'sane_lists', 'toc'])
        html = md.convert(self.content)
        return html


class Comment(models.Model):
    post = models.ForeignKey(BlogPost, on_delete=models.CASCADE,related_name='comments')
    name = models.CharField(max_length=100)
    email = models.EmailField()
    body = models.TextField()
    created_at = models.DateTimeField( auto_now_add=True)
    updated_at = models.DateTimeField( auto_now=True)

    active = models.BooleanField(default=False)

    def __str__(self):
        return f'Comment {self.body} by {self.name}'

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField( auto_now_add=True)
    updated_at = models.DateTimeField( auto_now=True)
 

    def __str__(self):
        return f'Comment {self.message} by {self.name}'
