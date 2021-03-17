const express = require('express');
const router = express.Router();


// Import controllers 
const adminControllers = require('../controllers/adminControllers');


// Get all news
router.get('/', adminControllers.admin);

// Add new one 
router.post('/', adminControllers.adminPost);

// Get news by id for update
router.get('/update/:id', adminControllers.updateGet);

// Update news 
router.post('/update/:id', adminControllers.updatePost);

// Delete news
router.get('/delete/:id', adminControllers.delete);


module.exports = router;