const mongoose = require('mongoose');

<<<<<<< HEAD
const commentSchema = new mongoose.Schema({
	name: String,
	comment: String,
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

const comments = mongoose.model('comment', commentsSchema);
module.exports = Comments;
=======
const commentSchema = new mongoose.Schema ({
    name: String, 
    comment: String,
    timestamps: true
})

const comments = mongoose.model('comment', commentsSchema);
module.exports = Comments;
>>>>>>> 30d8fd661888854e70e202c87c07aca40f0e61e7
