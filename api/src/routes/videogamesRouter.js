const {Router}=require("express")

const { getVideogamesHandler } = require("../handlers/videogamesHandler")

const videogamesRouter=Router();

videogamesRouter.get("/",getVideogamesHandler)

module.exports=videogamesRouter