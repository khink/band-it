install:
	make -C django_backend install
	make -C react_frontend install

run:
	make -C django_backend run &
	make -C react_frontend run
