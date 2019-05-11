const mongoose = require('mongoose');

// Answer Schema
const answerSchema = mongoose.Schema({
	A:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Answer= module.exports = mongoose.model('Answers', answerSchema);

// Get Answers
module.exports.getAnswers = (callback, limit) => {
    // console.log()
	Answer.find(callback).limit(limit);
}
module.exports.addAnswers = (answer, callback) => {
    console.log("answer is ",answer)
    Answer.create(answer, callback);
}