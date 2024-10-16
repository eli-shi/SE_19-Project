import express from 'express'
//const express = require('express')

// import jsonFile from './data.json'
// //const jsonFile = require('./data.json')


const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

app.use(express.static(`views`))


app.get(`/`, (request, response) => {
    response.render('todo')
    //response.sendFile(path.resolve(__dirname, 'views', 'todo.html'))
})


app.get(`/about-snoopy`, (request, response) => {
    response.render('aboutSnoopy')
})

app.get('/todolist/:user', (request, response) => {
    const user = request.params.user
    response.send(`You're at the todo list of user ${user}`)
})
  
app.get('/motivation-quotes', (request, response) => {
    response.render('motivationQuotes')
})

// // app.get('/fruitJSON', (request, response) => {
// //     // console.log(jsonFile)
// //     response.send(`Product is ${jsonFile.title}`)
// //     //you can also write 'product is' + jsonFile.title
// // })

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
