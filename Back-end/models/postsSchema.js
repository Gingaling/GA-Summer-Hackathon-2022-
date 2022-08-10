const mongoose = require('mongoose');

const postSchema = new mongoose.Schema ({
<<<<<<< HEAD
    created_at: {type: Date, default: Date.now},
    name: {type: String, required: true},
    location: {type: String, required: true},
    dateAvailable: {type: Date, required: true} 
=======
    timestamps: true,
    name: {type: String, required: true},
    zipCode: {type: String, required: true},
    dateAvailable: {type: Date, required: true}, 
>>>>>>> 30d8fd661888854e70e202c87c07aca40f0e61e7
    food: {type: String, required: true},
    description: {type: String, required: true},
    allergens: {type: Boolean, required: True}
})

const posts = mongoose.model('post', postSchema);
module.exports = Posts;
<<<<<<< HEAD
=======
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  name: { type: String, required: true },
  location: { type: String, required: true },
  dateAvailable: { type: Date, required: true },
  food: { type: String, required: true },
  description: { type: String, required: true },
  allergens: { type: Boolean, required: True },
});

const Posts = mongoose.model("post", postSchema);
module.exports = Posts;
=======
>>>>>>> 30d8fd661888854e70e202c87c07aca40f0e61e7
