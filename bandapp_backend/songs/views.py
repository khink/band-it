from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import SongListSerializer, SongSerializer
from .models import Song


class SongsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows songs to be view or edited.
    """
    queryset = Song.objects.all().order_by('title')
    serializer_class = SongListSerializer

    def retrieve(self, request, pk=None):
        song = get_object_or_404(self.queryset, pk=pk)
        serializer = SongSerializer(song, context={'request': request})
        return Response(serializer.data)
