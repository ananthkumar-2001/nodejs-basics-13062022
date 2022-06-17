const express = require("express")
const app = express()
const router = express.Router()
const users = require("./user.json")

router.get("/", function(request, response){
    response.send("Welcome to ExpressJS")
})

router.get("/employee", (request, response) => {
    response.send("Here is your employee information")
})

router.get("/users", (request, response) => {
    response.json(users)
})
router.get("*", (request, response) => {
    response.send("Please contact administartor")
})

app.use("/api", router)

const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`Server listening at PORT ${PORT}`)
})