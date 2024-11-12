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

app.post('/task/new', async (request, response) => {
    try {
        //edit data base, and render the todolist html with the template of it using the new data from the db
        const i = await Task.create(
            { title: request.body.title },
        );
        if (request.body.due != null){
            const task = await Task.findById(i._id).exec();
            console.log(task.due);
            task.due = request.body.due;
            task.save();
            console.log(task.due);
        }
        if (request.body.description != null){
            const task = await Task.findById(i._id).exec();
            console.log(task.description);
            task.description = request.body.description;
            task.save();
            console.log(task.description);
        }

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

app.get('/task/:id/view', async (request, response) => {
   
    // console.log(request.params.id + "end")
    // console.log('done')
    //find item using the id in the route
    
    try {
        console.log(request.params.id)
        const task = await Task.findById(request.params.id).exec();
        // console.log(task._id)
        // console.log(task.title)
        // console.log("done")
        response.render('task.ejs', { task: task }); //template using, items information

    } catch (error){
        console.error(error)
        response.status(500).send(error)
    }
})

//update task
app.post('/task/:id/view/edit', async (request, response) => {
    
    try {
        console.log(request.params.id)
        // const task = await Task.findOneByIdAndUpdate( request.params.id,
             
        //     { title: request.body.title }
        //     //(request.body.title) ? request.body.title : task.title },
        //     // {description: (request.body.description) ? request.body.description : task.description },
        //     // {due: (request.body.due) ? request.body.due : task.due }
            
        // ).exec()
        const task = await Task.findById(request.params.id);
        if (request.body.title != null){
            console.log(task.title);
            task.title = request.body.title;
        }
        if (request.body.due != ""){
            console.log(request.body.due)
            task.due = request.body.due;
            
        }
        if (request.body.description != ""){
            
            task.description = request.body.description;
            
        }
        task.save()
        // if(request.body.title != null){
            
        //     console.log(task.title)
        //     task.title = request.body.title
        //     console.log(task.title)
        // }
        // if(request.body.due != null){
        //     task.due = request.body.due
        // }
        // if(request.body.description != null){
        //     task.description = request.body.description
        // }
        console.log("done")
        response.redirect("/task/" + task._id + "/view");

    } catch (error){
        console.error(error)
        response.status(500).send(error)
    }
})

//delete task
app.post('/task/:id/delete', async (request, response) => {
    try {
        console.log(request.params.id)
        await Task.findByIdAndDelete(request.params.id);
        console.log('deleted')
        response.redirect('/');
    } catch (error){
        console.error(error)
        response.status(500).send(error)
    }
})


    
