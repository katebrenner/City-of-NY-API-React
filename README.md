# React + City of NY public data

### This is the repository for the front-end the application. The backend can be found at https://github.com/katebrenner/City-of-NY-Backend

This Application utilizes the City for NY API, specifically, motor vehicle collision information.

The app currently has 3 routes on the Front End-

- Homepage displays all Collision data, ordered by date. Each Item can be flagged for later investigation.
- Flagged page displays all accidents that have been flagged and stored to the db,as well as notes that have added.
- Map page utilizes google maps API to show a map of all accidents

Instructions for Running this project:

1.  clone the backend repo located at https://github.com/katebrenner/City-of-NY-Backend
2.  make sure docker and docker compose are installed
3.  from the root of backend folder run docker-compose up in the terminal.
4.  navigate to localhost:8080/accidents to confirm API is up and running.
5.  If build fails the first time, run docker-compose down and then docker-compose up
6.  clone this repo (front-end)
7.  run "npm install" in the terminal from the root of front-end folder
8.  run "yarn start" in the terminal from the root of front-end folder.
9.  navigate to localhost:3000 to see the application.
