const express = require("express")
const routes = express.Router()
const teachers = require("./teachers")

routes.get("/", function(req, res) {
    return res.render("layout")
})

routes.get("/teachers", function(req, res) {
    return res.render("teachers/index")
})

routes.post("/teachers", teachers.post)

routes.get("/teachers/create", function(req, res) {
    return res.render("teachers/create")
})

routes.get("/students", function(req, res) {
    return res.send("Routes from Students here! ")
})


module.exports = routes