const express = require("express")

const routes = express.Router()


routes.get("/Teachers", function(req, res) {
    return res.render("Teachers/index")
})

routes.get("/Students", function(req, res) {
    return res.send("Routes from Students here! ")
})


module.exports = routes