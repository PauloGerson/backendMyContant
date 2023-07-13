const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

//Contact Controller
router.get('/contacts', ContactController.index);
router.get('/contact/:id', ContactController.show);
router.delete('/contact/:id', ContactController.delete);
router.post('/contact', ContactController.store);
router.put('/contact/:id', ContactController.update);

//Category Controller
router.get('/category', CategoryController.index);
router.post('/category', CategoryController.store);
router.delete('/category/:id', CategoryController.delete);

module.exports = router;
