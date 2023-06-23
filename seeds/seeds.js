const usersData = require('../seed-data/users');
const projectsData = require('../seed-data/projects');
const itemsData = require('../seed-data/items');
const bidsData = require('../seed-data/bids');
const userBidsData = require('../seed-data/users-bids');

exports.seed = async function (knex) {
    await knex('users-bids').del();
    await knex('bids').del();
    await knex('items').del();
    await knex('projects').del();
    await knex('users').del();

    await knex('users').insert(usersData);
    await knex('projects').insert(projectsData);
    await knex('items').insert(itemsData);
    await knex('bids').insert(bidsData);
    await knex('users-bids').insert(userBidsData);

};