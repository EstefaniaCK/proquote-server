
const knex = require('knex')(require('../knexfile'));

const addBids = async (req, res) => {
    try {
        console.log("LOOK AT MEE", req.body);
        await knex('users-bids').insert(
          (req.body) 
        );
    res.status(200).json({ message: 'Bids added successfully' });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add bids' });
}
};

module.exports = {
    addBids,
};


