const knex = require('knex')(require('../knexfile'));

const getAllItems = (req, res) => {
    knex('items')
        .where('project_id', req.params.projectid)
        .then((data) => {
            if (data.length === 0) {
                return res.status(404).send('Unable to retrieve items');
            } else { res.status(200).json(data) }

        })
        .catch((error) => {
            console.error(error);
            return res.status(500).send('Unable to retrieve record');
        });
};

module.exports = {
    getAllItems
}