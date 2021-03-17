const express = require('express');
const router = express.Router();

// Import controllers 
const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.main);

router.get('/news', mainControllers.news);

router.get('/news/:id', mainControllers.readNews);


module.exports = router;