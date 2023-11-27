const {Router}=require("express");
const { getGenresHandler } = require("../handlers/getGenresHandler");

//const { getGenresHandler } = require("../handlers/videogamesHandler")

const genresRouter=Router();

genresRouter.get("/",getGenresHandler)

module.exports=genresRouter