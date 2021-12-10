# Frontend app - F1 championships

- The solution fetches data from a third party API (https://ergast.com/api) that provides F1 racing data. 
- The application consists of two routes with an initial page showing a list of champions for seasons 2005 to current.
- A second page, shows winners for a selected season, along with world champions highlighted for the selected season. 

## Table of contents

  - [Overview](#overview)
  - [Build](#build)
  - [Running the application](#run)

## Overview

The project consists of the structure below, for it's main components:

```.
        src
         ├── views    
         ├── components
            └── Championships
                └── Seasons
                ├── Winners
         ├── services
         ├── styles
         ├── constants
        App.jsx
    READ ME.md
    package.json
```

- The pages in the `views` folder is used for the routing and as containers for the relevant components found under `components\Championships`
- The `services` folder contains an `api.js` file with a function that takes in a URL and makes a call (using the `axios` package) to the Ergast API for the relevant requests
- The `styles` folder has default styles that are imported into `global.scss` for use in components
- The `components\Championships\*` folders have their own `.scss.module` stylesheet
- The constants folders has defaults for the API base url, start/end years used and error message

## Build

The application uses
- Create React App with functional components
- SASS/CSS
- React Router
- Node with Express to serve a build version of the app

## Run

The app is deployed to Heroku. 
Open [https://f1championship-app.herokuapp.com/](https://f1championship-app.herokuapp.com/) to view it in the browser.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Please run the command below, in the root folder of the project to install dependencies
#### `yarn`

To run the app in the development mode:
In the root directory of the project, please run:
#### `yarn dev`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run a build version of the project, please run the command below:
#### `yarn build`

Then do the following to install server dependencies
#### `cd server `
#### `yarn OR npm install`

Then to start the server
#### `cd ..`
#### `yarn start`

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
