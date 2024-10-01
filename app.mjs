import express from 'express'

const app = express()
const PORT = 3000

app.use(express.static('public'))

app.get('/aboutSnoopy.html', (request, response) => {
    response.send(`Welcome to my Snoopy To Do List`)
})

app.get('/todolist/:user', (request, response) => {
    const user = request.params.user
    response.send(`You're at the todo list of user ${user}`)
})
  
app.post('/motivationQuotes.html', (request, response) => {
    response.send(`Motivate yourself to do some tasks with Snoopy themed motivational quotes!`)
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
