const { Router } = require('express');

const { idRouter } = require('./idRouter');
const { nameRouter } = require('./nameRouter');
const videogamesRouter = require('./videogamesRouter');
const genresRouter = require('./genresRouter');
const createRouter = require('./createRouter');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/videogames/:idVideogame',idRouter)
router.use('/videogames/name',nameRouter)
router.use('/videogames',videogamesRouter)
router.use('/genres',genresRouter)
router.use('/postgame',createRouter)


module.exports = router;
