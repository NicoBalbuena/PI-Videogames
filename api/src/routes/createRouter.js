const {Router}=require('express');
const { createGameHandler } = require('../handlers/createGameHandler');

const createRouter=Router();

createRouter.post('/',createGameHandler)

module.exports=createRouter;