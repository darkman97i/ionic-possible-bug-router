# ionic-possible-bug-router

## Issue description
When router path is accessed at second time it is raised an "index.esm.js?d867:1096 Uncaught TypeError: Cannot read property 'classList' of undefined" error

## Run the sample
* npm install
* npm run serve
* open http://localhost:8888 in your browser
* click on tab3
* click on tab1

## Project quick description
* in Menu it is used <ion-menu component
* in App.vue there's the primary <ion-router-outlet id="main-content"/>
* in DefaultLayout there's the secondary <ion-router-outlet
* in router.js I have added beforeResolve to show in console router values

