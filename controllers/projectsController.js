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
        const results = await knex('projects')
            .where('projects.id', id)
            .join('items', 'items.project_id', 'projects.id')
            .join('bids', 'bids.project_id', 'projects.id')
            .join('users-bids', 'users-bids.bid_id', 'bids.id')
            .join('users', 'users.id', 'bids.user_id')


        console.log(results);
        res.json(results)
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