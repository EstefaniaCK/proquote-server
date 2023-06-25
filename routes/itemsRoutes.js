const router = require('express').Router();
const { getAllItems } = require('../controllers/itemsController');

router.get('/projects/:projectid/items', getAllItems);

module.exports = router;
