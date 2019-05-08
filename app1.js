const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
Question=require('./models/question');

mongoose.connect('mongodb://localhost/chat');
var db=mongoose.connection;

app.get('/',function(req,res){
    res.send('Welcome to/api/questions or /api/answers');
});
app.get('/api/questions',(req,res)=>{
   Question.getQuestions((err,questions)=>{
       if(err){
           throw err;
      }
      console.log("Response is: ",questions)
      res.json(questions);

   });
});
app.post('/api/questions', (req, res) => {
    console.log("body is: ",req);
    let question = req.body;
	Question.addQuestions(question, (err, question) => {
		if(err){
			throw err;
        }
        console.log("res on save: ",question)
		res.json(question);
	});
});
app.listen(3000);
console.log('Running on port 3000!!!!');