from rest_framework import serializers

from .models import Song


class SongListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Song
        fields = ('url', 'title', 'as_performed_by')


class SongSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Song
        fields = ('url', 'title', 'as_performed_by', 'lyrics')
