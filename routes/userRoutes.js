const router = require('express').Router();
const userController = require('../controllers/userController')

// creating users registration route
router.post('/users', userController.createUser)


// controller(Export) - Routes(import) - use - (index.js) Emil basnyat

// Exporting the routes
module.exports = router;

