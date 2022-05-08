const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')



const startServer = async () => {
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({
        app
    })



    app.use((req, res) => {
        res.send("Hello from express apollo server")
    })

    app.listen(4000, () => {
        console.log("Server is running on port 4000")
    })

    await mongoose.connect(`mongodb://127.0.0.1:27017/post`)

    console.log("Mongoose connected")
}

startServer()