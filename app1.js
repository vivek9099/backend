const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
Question=require('./models/question');
Answer =require('./models/answer');

mongoose.connect('mongodb://localhost/chat');
app.use(bodyParser.json());
var db=mongoose.connection;

app.get('/',function(req,res){
    res.send('Welcome to/api/questions or /api/answers');
});
app.get('/api/questions',(req,res)=>{
   Question.getQuestions((err,questions)=>{
       if(err){
           throw err;
      }
      
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
    
		res.json(question);
	});
});
app.get('/api/answers',(req,res)=>{
    Answer.getAnswers((err,answers)=>{
        if(err){
            throw err;
       }
       
       res.json(answers);
 
    });
});
app.post('/api/answers', (req, res) => {
    console.log("body is: ",req);
    let  answer = req.body;
	Answer.addAnswers(answer, (err, answer) => {
		if(err){
			throw err;
        }
    
		res.json(answer);
	});
});
app.listen(3000);
console.log('Running on port 3000!!!!');
