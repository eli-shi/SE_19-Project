const express = require('express')
const app = express()
const PORT = 3000


const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Task = require('./models/Task.cjs');


app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true }));

mongoose.connect('mongodb+srv://elinashirinyan:CeyRiISJ0RdQ9ZBV@cluster0.gfsbi.mongodb.net/Data-Collection?retryWrites=true&w=majority&appName=Cluster0')
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
    try {
        // const i = Task.create({ title: "Testing method for insert in collection"})
        const tasks = await Task.find({});

        response.render('todo', { tasks: tasks }) //{tasks:tasks}???
    } catch (error){
        console.error(error)
        response.status(500).send(error)
    }
});

app.post('/create-task', async (request, response) => {
    try {
        //edit data base, and render the todolist html with the template of it using the new data from the db
        const i = await Task.create({ title: request.body.title });
        response.redirect("/");
    } catch (error){
        console.error(error)
        response.status(500).send(error)
    }
})

app.get('/about-snoopy', (request, response) => {
    try {
        response.render('aboutSnoopy');
    } catch (error){
        console.error(error)
        response.status(500).send(error)
    }
})

app.get('/motivation', (request, response) => {
    try {
        response.render('motivationalQuotes');
    } catch (error){
        console.error(error)
        response.status(500).send(error)
    }
})

app.get('/task/:id', async (request, response) => {
    
    //find item using the id in the route
    const task = await Task.find({});

    try {
        response.render('task.ejs', { task: task }); //template using, items information

    } catch (error){
        console.error(error)
        response.status(500).send(error)
    }
})

//update task


//delete task



    
