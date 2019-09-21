# Band-it Roadmap

Where are we going with this?


## Technical design

We have a JS frontend and a REST API backend.

The current (React) frontend and Django backend are both in this project's
repository.

These might get their own repos when they reach critical mass. At the moment
it's easier to have them in one dir.


## Features


### Minimal Viable Product

- Lyrics + chords sheets shared with band members
    * Sync automatically (some apps don't)
- Smooth mobile interface
    * Intuitive interface
    * Tablets and phones
    * Easy to change lyrics, a chord, or add an annotation
- Web-based
    * No need to install yet another app
    * Rich features on desktop version (no UI clutter in app)
    * Reconsider native mobile app if features are really a lot better on native
    * API based
    * Offline graceful degradation possible
- Lyrics
    * Annotations (cues, like "break here")
- Chords / Music
    * Display differently than lyrics so it doesn't distract
    * Transpose
    * TBD: Use ChordPro format + https://github.com/martijnversluis/ChordFiddle


### Next

- Setlists
    * Select songs to play at gig / rehearsal, put in order
- Exports
    * Plain text export for everything
    * PDF export for sheets, should preserve chord/lyrics alignment
    * ChordPro
- Imports
    * ChordPro format (https://www.chordpro.org/)
- Internationalization
    * Interface in these languages: EN ES DE FR NL initially
- Make it work offline (HTML5 + app cache + offline storage)
    * is the extra complexity justified? TBD


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
- Target group size: About 1 in 1000 people would consider this app
    * [about 1 in 10 play an instrument](https://www.statista.com/statistics/192834/people-playing-a-musical-instrument-in-the-us/)
    * from my gut feeling, about 1 in 10 of these play with a group sometimes
    * maybe 1 in 10 of these are serious enough to get the app
    * This would be about 1 million for Europe + US
- Existing apps and [other solutions](OTHER_PRODUCTS.md) all suck


## Business plan?

Some things to consider if anyone ever wants to make money with this.


### End user interaction

Registration and billing must be painless, but still some time needs to be reserved for:

- Support / helpdesk (can be via e-mail)
- Check online reviews


### Payment plan

- Subscription
- Monthly (low threshold) and yearly
- About 1 to 2 euros/dollars per month per person
- Option to pay as band (mosts bands have communal bank account)
- Option to pay per year

We'd need to send payment requests for continuation at the end of each subscription period.
