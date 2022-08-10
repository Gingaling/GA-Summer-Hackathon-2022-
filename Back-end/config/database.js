<<<<<<< HEAD
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
=======
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
>>>>>>> 30d8fd661888854e70e202c87c07aca40f0e61e7
});

const db = mongoose.connection;

<<<<<<< HEAD
db.on('connected', function() {
	console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
=======
db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
>>>>>>> 30d8fd661888854e70e202c87c07aca40f0e61e7
});
