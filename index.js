const express = require('express');
const hbs=require('hbs');
const app = express();
const path=require('path');
const port=process.env.PORT||3000;

app.set('view engine', 'hbs');
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/dashboard',(req,res)=>{
    res.render('dashboard');
});
app.get('/profile',(req,res)=>{
    res.render('profile');
});
app.get('/resources',(req,res)=>{
    res.render('resources');
});
app.listen(port,()=>{
    console.log('Listening on port 3000');
});
