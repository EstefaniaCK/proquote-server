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

module.exports = {
    getAllProjects
}