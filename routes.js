const express = require("express")

const routes = express.Router()


routes.get("/", function(req, res) {
    return res.render("layout")
})

routes.get("/Teachers", function(req, res) {
    return res.render("teachers/index")
})

routes.get("/Teachers/create", function(req, res) {
    return res.render("teachers/create")
})

routes.get("/Students", function(req, res) {
    return res.send("Routes from Students here! ")
})


module.exports = routes