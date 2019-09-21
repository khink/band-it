PYTHON_VERSION ?= 3.7
SYSTEM_PYTHON := $(shell which python$(PYTHON_VERSION))

# use virtualenv or virtualenv-wrapper location based on availability
ifdef WORKON_HOME
	VIRTUALENV = $(WORKON_HOME)/band-it
else
	VIRTUALENV = $(PWD)/virtualenv
endif

PYTHON = $(VIRTUALENV)/bin/python

.PHONY: virtualenv
virtualenv: $(VIRTUALENV) # alias
$(VIRTUALENV):
	virtualenv -p $(SYSTEM_PYTHON) $(VIRTUALENV)
	$(PYTHON) -m pip install --upgrade pip setuptools

.PHONY: install
install: .develop.done # alias
.develop.done: $(VIRTUALENV)
	$(PYTHON) -m pip install -r requirements.txt
	$(PYTHON) -m manage migrate
	$(PYTHON) -m manage create_initial_songs
	touch $@

.PHONY: run
run: install
	$(PYTHON) -m manage runserver
