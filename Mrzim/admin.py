from django.contrib import admin
from.models import Post

class PostAdmin(admin.ModelAdmin):
    fields = ['date', 'title', 'text']
    list_display = ('date', 'title')
    list_filter = ['title', 'date']
    search_fields = ['title']

admin.site.register(Post, PostAdmin)