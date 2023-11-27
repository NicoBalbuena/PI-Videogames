const {Router}=require("express");
const { getNameHandler } = require("../handlers/nameHandler");
const { getVideogamesHandler } = require("../handlers/videogamesHandler");


const nameRouter=Router();

nameRouter.get("/",getVideogamesHandler)

module.exports={
    nameRouter
}