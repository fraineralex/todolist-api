/* eslint-disable no-undef */
const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

/* Getting the connection string from the environment variable. */
const connectionString = process.env.MONGO_DB_URI

/* Connecting to the database. */
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected successfully to the database')
    }).catch(err => {
        console.error(err)
    })

/* Disconnecting the mongoose connection when an uncaught exception occurs. */
process.on('uncaughtException', () => {
    mongoose.connection.disconect()
})