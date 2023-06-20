
const knex = require('knex')(require('../knexfile'));

const addBids = (req, res) => {
    const list = req.body
    for (item of list) {
        console.log(item)
        knex('bids')
            .insert(
                {
                    item_id: item.item_id,
                    user_id: item.user_id,
                    project_id: item.project_id,
                    unit_price: item.unit_price,
                }
            )
    }

};

module.exports = {
    addBids
}