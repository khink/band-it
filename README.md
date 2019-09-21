# Band-it

A web-based app for sharing lyrics, chords, annotations and setlists with band members.

For features and a roadmap, see the [roadmap](ROADMAP.md).


## Installation

In short:

	make run

This will start the backend, frontend and open a browser window to http://localhost:3000.

See the Makefiles for details.


## What's in this package?

### Frontend

A React-based frontend.


### Backend

A Django REST framework-based backend, running on http://localhost:8000.

* Add songs via the Django admin interface at `/admin/`
* Inspect the API endpoint at `/`
