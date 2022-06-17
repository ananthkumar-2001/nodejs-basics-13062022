const express = require("express")
const app = express()
const router = express.Router()
const mongoose = require("mongoose")
const Student = require("../models/student")

mongoose.connect("mongodb://localhost:27017/studentdb", (err) => {
    if(err){
        throw err
    } else {
        console.log("Connected to MongoDB Successfully !!!")
    }
})

console.log(Student)

router.get("/", (request, response) => {
    response.json("Welcome to Student API using MongoDB")
})

router.get("/students", (request, response) => {
    Student.getStudents(function(err, data){
        if(err){
            throw err
        }
        response.json(data)
    })
})

app.use("/api", router)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})