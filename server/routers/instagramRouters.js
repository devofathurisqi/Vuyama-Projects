const Router = require('express').Router()

const { instagramControllers } = require("../controllers")
const { multerUpload } = require('../middleware/multerProduct');

//post
Router.post("/postFeed", multerUpload.single('file'), instagramControllers.postProductInstagram)

//get
Router.get("/getFeed", instagramControllers.getProductInstagram)
Router.get("/getProduct", instagramControllers.getProductInstagramForDelete)

//delete
Router.delete("/deleteInstagram/:id", instagramControllers.deleteProductInstagram)


module.exports = Router
