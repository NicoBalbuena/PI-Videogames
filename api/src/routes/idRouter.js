const {Router}=require('express');
const { idHandler } = require('../handlers/idHandler');


const idRouter=Router();

idRouter.get("/",idHandler);

module.exports={
    idRouter
}