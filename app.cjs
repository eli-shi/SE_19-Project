const express = require('express')
const app = express()
const PORT = 3000

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Task = require('./models/dataSchema.cjs');

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true }));



var arr = [];


const item1 = new Task({ name: "snoop"});
const item2 = new Task({ name: "y"});

const d = [item1, item2];
// Task.collection.insertMany(d, function(error){
//     if(error){
//         console.log(error);
//     }  else {
//         console.log("Success!!!");
//     }
// })

app.get('/', async (request, response) => {
    db.tasks.insertOne(Task.create({ title: "Testing method for insert in collection"}))
    const tasks = await Task.find({});
    response.render('todo', tasks)

});

app.post('/', async (request, response) => {
   //edit data base, and render the todolist html with the template of it using the new data from the db
    const i = await Task.create({ title: request.body.inputBox });
    i.save();
    
    response.redirect("/");
})

app.get('/about-snoopy', (request, response) => {
    response.render('aboutSnoopy');
})

db = mongoose.connect('mongodb+srv://elinashirinyan:CeyRiISJ0RdQ9ZBV@cluster0.gfsbi.mongodb.net/Data-Collection?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('💽 Database connected');
        app.listen(PORT, () => {
            console.log("server is listening...")
        });
    })
    .catch(error => {
        console.log(error)
        console.error('Database connection failed :((')
    })
    
