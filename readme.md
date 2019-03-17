# BandApp

A web-based app for sharing music lyrics, chords, annotations and setlists with band members.


## Installation

### Backend

A Django REST framework based backend.

    pip install -r requirements.txt
    ./manage.py runserver

* Add songs via the Django admin interface at `/admin/`
* Inspect the API endpoint at `/`


## Features

### Initial

- Lyrics + chords sheets shared with band members
    * Sync automatically (some apps don't)
- Smooth mobile interface
    * Intuitive interface
    * Tablets and phones
    * Easy to change lyrics, a chord, or add an annotation
- Web-based
    * No need to install yet another app
    * Works offline, too (HTML5 + app cache + offline storage)
        - is the extra complexity justified? TBD
    * Rich features on desktop version (no UI clutter in app)
    * Reconsider native mobile app if features are really a lot better on native
    * API based
- Lyrics
    * Annotations (cues, like "break here")
- Chords / Music
    * Display differently than lyrics so it doesn't distract
    * Transpose
- Setlists
    * Select songs to play at gig, put in order
- Exports
    * Plain text export for everything
    * PDF export for sheets, should preserve chord/lyrics alignment
- Payment plan
    * Low threshold
- Internationalization
    * Interface in these languages: EN ES DE FR NL initially


### Future

- More musical info
    * Song duration (-> setlist duration)
    * Beats Per Minute, show flash
    * Mixing / Effect / Amp settings
- Annotations for Mixing / Lighting people
- Song meta-info (for covers)
    * Which version do we play
    * Spotify/YouTube link
    * Author
    * Rights
- Collaboration
    * Discussion / Notes ("Should we do we sing here?")
    * Different roles: read-only vs read+write
    * Area-based (chord/lyrics/notes) roles
- Catalogue
    * Readily available catalogue of famous songs for instant use (beware of rights issues)
    * Import from "Internet Search"?
- Direct API access
    * Integrations with WhatsApp, Google Drive, Dropbox, Slack, SalesForce, whatever


### Not likely

- Cue sheet for lyrics (Karaoke mode)
    * When you perform, you either know your shit, or you know you're shit.
- Calendar / Booking / CRM integration.
    * Smart integrations, yes. Monolith, no.


## Assumptions

- Every band
    * Has at least one "digitally challenged" member
    * Has members with different mobile OS'es.
    * Has at least one person who just likes to print a bunch of paper sheets.
- Target group are musicians who play in groups
    * Three or more members, genre: popular, western music (no half-notes)
    * No orchestras, brass bands (focus on chords, not arrangements of one note instruments)
- Target group comprises all levels of professionalism
    * lots of amateurs struggle with chords, change bands / songs frequently
    * lots pros play in different groups (with different songs) all the time
    * only full-time pros who play their own work exclusively are less likely to benefit
- Pricing:
    * Anyone who takes their music seriously will pay up to 4 EUR/mo
    * Not everybody who takes their music seriously will pay 5 EUR/mo
        - That's what Spotify charges, and some people try to get by without.
- Target group size: About 1 in 1000 people would consider this app
    * [about 1 in 10 play an instrument](https://www.statista.com/statistics/192834/people-playing-a-musical-instrument-in-the-us/)
    * from my gut feeling, about 1 in 10 of these play with a group sometimes
    * maybe 1 in 10 of these are serious enough to get the app
    * This would be about 1 million for Europe + US
- Existing apps and other solutions all suck (see below, "Comparable solutions")


## Comparable solutions

- [Band Helper](http://www.bandhelper.com/)
    * Pros
        + [Lots of features](http://www.bandhelper.com/main/features.html)
        + iOS and Android
        + Extra modules (paid): Schedule, Finance, Contacts, Stage plot
    * Cons
        - Not the smoothest interface
    * Pricing
        - [3$/mo. for 2-5 members](http://www.bandhelper.com/main/pricing.html)
- [Set List Maker](http://www.arlomedia.com/apps/setlistmaker/main/home.html)
    * Pros
        + iOS and Android
    * Cons
        - "Sync" by sending and importing "databases" (deleting existing "database')
    * Pricing
        - &euro;16
- [Chords + Lyrics](http://www.chordsandlyricsapp.com/)
    * Pros
        + Smooth interface
        + Transpose
        + Download songs from internet
    * Cons
        - No group sharing / syncing
        - iOS only
        - Baaad reviews
    * Pricing
        - $6, one time purchase
- [OnSong](https://onsongapp.com/)
    * Pros
        + [Lots of features](https://onsongapp.com/docs/features/)
        + Smooth interface, probably :)
        + Transpose
    * Cons
        - No group sharing / syncing
        - iOS only
        - price
    * Pricing
        - $30, one time purchase
- [Google Docs/Drive](https://docs.google.com/)
    * Pros
        + free
        + web-based
        + shared
        + annotations
    * Cons
        - No smooth mobile experience
        - Creating a setlist is copy-paste in order
        - PDF export alignment errors
        - No transpose, or other music-specific features, ever
        - "Pseudo-free" (pay with your data/soul) / Some people's aversion to Google.
    * Pricing
        - free


### Not Quite The Same Thing

- [Band Mule](https://www.bandmule.com/) More focus on organisation (calendar), communication (chat), file sharing
- [LyricPadApp](http://www.lyricpadapps.com/) Scrolling lyrics
- [Setlist Helper](http://www.setlisthelper.com/) Create setlists, no chords, lyrics. Also, fugly.


## Implementation / Caveats


### End user interaction

As this will involve direct end user interaction, a large amount of time is needed to manage that:

- Support / helpdesk (can be via e-mail)
- Check online reviews


### Payment plan

- Subscription
- Monthly (low threshold) and yearly
- About 1 to 2 euros/dollars per month

We'd need to send payment requests for continuation at the end of each subscription period.


### Backend only?

I'm assuming there's going to be a JS frontend and a REST API backend.

A thought: can we just "sell" API calls to the back-end, and let another party
take care of the front-end and customer support?

This might open up our business also to people who wish to build an app.
