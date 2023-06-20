const router = require('express').Router();
const { addBids } = require('../controllers/bidsController');

router.post('/bids', addBids);

module.exports = router;
