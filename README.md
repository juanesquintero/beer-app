# Beer APP

The BeerApp is a web application where you can order and pay beers for friends that are sharing the same table.
The project is a mono repo and contains 2 apps; the Next.js Web front-end and Django API back-end.

## Getting started


### Clone Repo
```
$ git clone https://github.com/juanesquintero/beer-app.git
```
or via SSH
```
$ git clone git@github.com:juanesquintero/beer-app.git
```


## Run it

Docker helps us to remove the os dependencies on software development this is why we use it here, please install it to run this project https://docs.docker.com/engine/install/

After having Docker and Docker Compose Installed please notice that we have a docker-compose.yml that defines the running parameters for the respective containers needed, you just need to run one unique command:

```
$ docker-compose up -d
````

---

Although you can run it with the following command locally having `Python 3.12` and `Node 21` installed

`/web`
```
$ npm i
$ npm run dev
````

`/api`
```
$ pip install -r requirements.txt
$ python manage.py runserver
````


This both commands will start the front-end and back-end for the whole project.

React UI (Next.js 14.1) on http://localhost:3000

Python API (Django 5.0) on http://localhost:8000



## Teck Stack

I decided to use the latest stable versions of the frameworks (Next.js 14.1) (React 18) and (Django 5.0.2
Restframework 3.14), related to languages and supersets (Typescript 5.0) (Python 3.12), to benefit from the latest features and fixes.

