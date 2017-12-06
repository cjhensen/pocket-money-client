Pocket Money
------------------------------

[Live Demo!](pocketmoney.netlify.com)
-------------------------------------

![Overview](http://oi65.tinypic.com/eijwg3.jpg) ![Categories (Mobile)](http://oi65.tinypic.com/io2kpj.jpg)

![Categories (Desktop)](http://oi65.tinypic.com/14ayejs.jpg)

Test the app
------------
Sign up with your own details (username and password) or use **demo details** **(username: demo, password: demo)**. 
Add your income, set some categories and their spending limits, and add some transactions to track your spending!

Note*
------------
This app is a true single page app, meaning back/forward browser buttons do not work!

Summary
-------
Pocket Money helps you to track you spending by creating a budget and staying on track. Set your income, create categories with spending limits, then log your daily transactions to track your spending.

Planned Features
----------------
An insights view is planned for down the road to give the user a more in depth view of their spending with a series of graphs and charts.
Recurring income handling.
Monthly income. View previous months.
Direct field editing of existing list items.

Files
----------------

 - src
   - config.js: database config variables
   - index.js: app entry point wrapped in a react provider for store
   - /actions: react actions dispatched throughout the codebase to tell the reducers to modify the state or perform a db request
   - /components: each part of the app is broken down into reusable components. Most of the components separate logic from presentation, having an index.js file for logic and the component file for HTML presentation.
   - /reducers: modify the state based on an action being dispatched
   - /vendor: bootstrap and normalize css libraries

**Tech Used**

 - enzyme-adapter-react-16
 - react
 - react-bootstrap
 - react-dom
 - react-helmet
 - react-redux
 - react-scripts
 - react-slick
 - redux
 - redux-thunk
 - salad-ui-chart
 - shortid
 - slick-carousel

**Scripts**

The basic React scripts out of the box

 - npm start: starts the app
 - npm build: builds the app
 - npm test: runs all tests found
 - npm eject: eject the react app