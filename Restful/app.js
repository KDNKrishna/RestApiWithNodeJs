const express = require('express');

const BodyParser = require('body-parser');
const app = express();

//parse application/x-www.form-urlencoded
app.use(BodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(BodyParser.json());
//People > /people
//Person/Row > /people/person
//Person/Row/Age > /people/person/age

let people = {people : [{name: "Krish"}]}
app.get('/people', function(req, res){
    res.json(people);
    res.end();
});

//To get the name which we include in params
app.get('/people/:name', function(req, res){
    res.json({name: req.params.name});
    res.end();
});

//To get the age which is included in the params
app.get('/people/:name/:age', function(req, res){
    res.json({age: req.params.age});
    res.end();
})

app.post('/people', function(req, res){

    if(req.body && req.body.name)
    {
        people.people.push({name: req.body.name})
    }
    res.json(people);
    res.end();
});

app.put('/people', function(req, res){

    if(req.body && req.body.name)
    {
        people.people.push({name: req.body.name})
    }
    res.json(people);
    res.end();
});

app.delete('/people', function(req, res){

    if(req.body && req.body.name)
    {
        people.people.push({name: req.body.name})
    }
    res.json(people);
    res.end();
});


app.listen(3000, 'localhost', function(){
    console.log("Request is sent");
});