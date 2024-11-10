
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        title : { 
            type: String, 
            unique: true, 
            required: true
        },
        description : {
            type: String,
            unique: false,
            required: false
        },
        due : {
            type: String,
            unique: false,
            required: false
        }
    }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;