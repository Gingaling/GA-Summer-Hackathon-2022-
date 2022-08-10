<<<<<<< HEAD
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();
require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
=======
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const app = express();
require("dotenv").config();
require("./config/database");

app.use(logger("dev"));
>>>>>>> 30d8fd661888854e70e202c87c07aca40f0e61e7
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
<<<<<<< HEAD
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
=======
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
>>>>>>> 30d8fd661888854e70e202c87c07aca40f0e61e7
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

<<<<<<< HEAD
app.listen(port, function() {
	console.log(`Express app running on port ${port}`);
=======
app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
>>>>>>> 30d8fd661888854e70e202c87c07aca40f0e61e7
});
