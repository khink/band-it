from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path

from rest_framework import routers

from songs import views


router = routers.DefaultRouter()
router.register(r'songs', views.SongsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    url(r'^admin/', admin.site.urls),
]
