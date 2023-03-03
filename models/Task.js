const { model, Schema } = require('mongoose')

/* Creating a new schema for the task model. */
const taskSchema = new Schema({
    content: String,
    date: Date,
    isCompleted: Boolean
})

/* A method that is used to transform the data that is returned from the database. */
taskSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id,
        delete returnedObject._id,
        delete returnedObject.__v
    }
})

/* Creating a new model called Task. */
const Task = model('Task', taskSchema)

module.exports = Task