from django.shortcuts import render

from rest_framework import viewsets

from .serializers import SongSerializer
from .models import Song


class SongsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows songs to be view or edited.
    """
    queryset = Song.objects.all().order_by('title')
    serializer_class = SongSerializer
