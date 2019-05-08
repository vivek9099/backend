const mongoose = require('mongoose');

// Question Schema
const questionSchema = mongoose.Schema({
	Q:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Question= module.exports = mongoose.model('Questions', questionSchema);

// Get Genres
module.exports.getQuestions = (callback, limit) => {
    // console.log()
	Question.find(callback).limit(limit);
}
module.exports.addQuestions = (question, callback) => {
    console.log("question is ",question)
    Question.create(question, callback);
}