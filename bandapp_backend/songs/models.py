from django.db import models


class Song(models.Model):
    title = models.CharField(max_length=200)
    as_performed_by = models.CharField(max_length=200)
    lyrics = models.TextField()

    def __str__(self):
        return f'{self.title} ({self.as_performed_by})'
