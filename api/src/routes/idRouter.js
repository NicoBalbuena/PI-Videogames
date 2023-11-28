const {Router}=require('express');
const { idHandler } = require('../handlers/idHandler');
const { getVideogamesHandler } = require('../handlers/videogamesHandler');


const idRouter=Router();

idRouter.get("/",getVideogamesHandler);

module.exports={
    idRouter
}