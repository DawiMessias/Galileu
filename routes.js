const express = require("express")

const routes = express.Router()


routes.get("/", function(req, res) {
    return res.render("Teachers/index")
})

routes.get("/Teachers", function(req, res) {
    return res.send("Routes from Teachers here!")
})

routes.get("/Students", function(req, res) {
    return res.send("Routes from Students here! ")
})


module.exports = routes