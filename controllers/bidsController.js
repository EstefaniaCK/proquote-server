
const knex = require('knex')(require('../knexfile'));

const addBids = async (req, res) => {
    try {
        const [bidId] = await knex('bids').insert({
            project_id: req.body.project_id,
            user_id: req.body.user_id,
        });
        
        const pricingList = req.body.pricingList.map((price) => ({
            ...price,
            bid_id: bidId,
        }));

        await knex('users-bids').insert(pricingList);

        res.status(200).json({ message: 'Bids added successfully' });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add bids' });
    }
};

module.exports = {
    addBids,
};