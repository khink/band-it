# BandApp

A web-based app for sharing music lyrics, chords, annotations and setlists with band members.


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
    * Works offline, too
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
- PDF export
    * Should preserve chord/lyrics alignment
- Payment plan
    * Subscription
    * Monthly (low threshold)
    * About 1 to 4 euros/dollars per month
- Internationalization
    * Interface in these languages: EN ES DE FR NL initially


### Future

- More musical info
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
- Direct API access
    * Integrations with WhatsApp, Slack, SalesForce, whatever


### Not likely

- Cue sheet for lyrics (Karaoke mode)
    * When you perform, you either know your shit, or you know you're shit.
- Calendar / Booking / CRM integration.
    * Smart integrations, yes. Monolith, no.


## Assumptions

- Every band
    * Has at least one "digitally challenged" member
    * Has members with different cell phone OS'es.
    * Has at least one person who just likes to print a bunch of paper sheets.
- Target group are musicians who play in groups
    * Three or more members, genre: popular, western music (no half-notes)
    * No orchestras, brass bands
- Target group comprises all levels of professionalism
    * full-time pros who play their own work exclusively are less likely to benefit
    * lots of other pros play in different groups (with different songs) all the time
    * lots of amateurs struggle with chords, and change bands / songs more frequently
- Pricing:
    * Anyone that takes their music seriously will pay up to 4 EUR/mo
    * Not everybody who takes their music seriously will pay 5 EUR/mo
        - That's what Spotify charges, and some people try to get by without.
- Target group size: About 1 in 1000 people would consider this app
    * [about 1 in 10 play an instrument](https://www.statista.com/statistics/192834/people-playing-a-musical-instrument-in-the-us/)
    * from my gut feeling, about 1 in 10 of these play with a group sometimes
    * maybe 1 in 10 of these are serious enough to get the app
    * This would be about 1 million for Europe + US
- Existing apps and other solutions all suck (see below, "Comparable solutions")


## Comparable solutions

- [OnSong](https://onsongapp.com/)
    * Pros
        + [Lots of features](https://onsongapp.com/docs/features/)
        + Smooth interface, probably :)
        + Transpose
    * Cons
        - No group sharing / syncing
        - iOS only
        - $30, one time purchase
- Google Docs/Drive
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


### Not Quite The Same Thing

- [Band Mule](https://www.bandmule.com/) More focus on organisation (calendar), communication (chat), file sharing
