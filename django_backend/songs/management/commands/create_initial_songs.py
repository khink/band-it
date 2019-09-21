from django.core.management.base import BaseCommand, CommandError
from songs.models import Song

sample_songs = [
    ("My Heart Will Go On", "Celine Dion", """
D              A
Every night in my dreams
  G          D    A
I see you, I feel you
That is how I know you go on
Far across the distance
And spaces between us
You have come to show you go on
Near, far, wherever you are
I believe that the heart does go on
Once more you open the door
And you're here in my heart
And my heart will go on and on
Love can touch us one time
And last for a lifetime
And never let go till we're gone
Love was when I loved you
One true time I hold to
In my life we'll always go on
        """),
    ("Total Eclipse Of The Heart", "Bonnie Tyler", """
every now and then I get a little bit lonely
And you're never coming 'round
(Turn around) every now and then I get a little bit tired
Of listening to the sound of my tears
(Turn around) every now and then I get a little bit nervous
That the best of all the years have gone by
(Turn around) every now and then I get a little bit terrified
And then I see the look in your eyes
(Turn around, bright eyes) every now and then I fall apart
(Turn around, bright eyes) every now and then I fall apart
And I need you now tonight
And I need you more than ever
And if you only hold me tight
We'll be holding on forever
And we'll only be making it right
'Cause we'll never be wrong
Together we can take it to the end of the line
        """),
]


class Command(BaseCommand):
    help = 'Adds two sample songs'

    def handle(self, *args, **options):
        for song in sample_songs:
            Song.objects.create(
                title=song[0],
                as_performed_by=song[1],
                lyrics=song[2],
            )
