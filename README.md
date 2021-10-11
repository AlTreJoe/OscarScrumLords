# OscarScrumLords
Greenfield Project: Bike Around and Find Out
# APP DESCRIPTION
Bike Around and Find Out is a New Orleans based social media hub for biking enthusiasts. Through our app users are be able to interact with our dynamic map of New Orleans to log their favorite routes, post pictures from their travels, create and rsvp to events, and make note of any hazards of the road and/ or helpful bike stores within the 504.

Users can also interact with eachother, send eachother messages, follow eachother, visit eachothers profiles, and live chat.  
# PROJECT STATUS
Project Status: In development. Our beta version is functional but is updated frequently while we account for new bugs and continue to hone and make minor adjustments to Bike Around and Find Out's aesthetic. Fully deployed through AWS.
# REQUIREMENTS
CD into Server folder to reseed MYSQL 'bike' database.

These specific commands also listed in  server/db/index.js:
  mysql.server start (or your normal SQL start sequence)
  In a separate terminal CD into server folder
  then mysql -u root < schema.sql
  run mysql -u root
  show databases
  use bike
  show tables

  you also can just run npm run db:seed

  in the front end, in ChatRoom.jsx, the socket.io defaults to local host.  for deployment, adjust the variable as needed. 

**Google Calendar**
  need to go to the google calendar API and get an API KEY. Need to create an email address associated with the community group. Get a calendar id for the calendar and add that and the API key to the .env file.


  **Bike Registry**
    Need to create an account with BikeIndex.org. Then, create an organization to use the registry API.


# TECH WE USE
**FRONTEND**
    axios - Promise based HTTP client for the browser and node.js
    bootstrap - Sleek, intuitive, and powerful front-end framework for faster and easier web development.
    react - React is a JavaScript library for creating user interfaces.
    react-bootstrap - Create documentation layouts for your react-styleguidist using Bootstrap-Styled rsg-component.
    react-google-calendar - Calendar linked to google calendar. Displays events dynamically.
    react-datepicker - A simple and reusable Datepicker component for React
    react-google-login - A simple small package with action - (login / sign-in) button.
    react-google-maps - react-google-maps provides a set of React components wrapping the underlying Google Maps JavaScript API v3 instances.
    styled-components - lets you write actual CSS in your JavaScript.
    use-places-autocomplete - This is a React hook for Google Maps Places Autocomplete, which helps you build a UI component with the feature of place autocomplete easily.
    socket.io-client for real time communication from front end
**BACKEND**
    express - Fast, unopinionated, minimalist web framework for node.
    mysql-server - MySQL is an open-source relational database management system
    mysql2 - MySQL is an open-source relational database management system
    react-router-dom - React Router offers an incremental migration path, but @reach/router looks slightly more like the new API.
    webpack - webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser
    webpack-cli - webpack CLI provides a flexible set of commands for developers to increase speed when setting up a custom webpack project.
    socket.io- an express library to handle real time communication
# BUGS AND FIXES
Not yet available as a mobile app.
# FAQ
Copyright and licensing information