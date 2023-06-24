const knex = require('knex')(require('../knexfile'));

const getAllProjects = (req, res) => {
    knex('projects')
        .then((data) => {
            if (data.length === 0) {
                return res.status(404).send('Unable to retrieve projects');
            } else { res.status(200).json(data) }

        })
        .catch((error) => {
            console.error(error);
            return res.status(500).send('Unable to retrieve record');
        });
};

const bids = async (req, res) => {
    const { id } = req.params;

    try {
        const items = await knex('items')
            .where('project_id', id);

        for (const item of items) {
            const bids = await knex
                .select(
                    "users-bids.unit_price",
                    "users.company_name"
                )
                .from("users-bids")
                .join("bids", "bids.id", "users-bids.bid_id")
                .join("users", "users.id", "bids.user_id")
                .where("item_id", item.id);

            item.bids = bids;
        }

        console.log(items);
        res.json(items);

    }
    catch (error) {
        console.log(error)
        return res.status(500).send('Unable to retrieve record');
    }
}

module.exports = {
    getAllProjects,
    bids
}