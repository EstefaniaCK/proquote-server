const usersData = require('../seed-data/users');
const projectsData = require('../seed-data/projects');
const itemsData = require('../seed-data/items');
const bidsData = require('../seed-data/bids');
const userBidsData = require('../seed-data/users-bids');

exports.seed = function (knex) {
    return knex('bids')
        .del()
        .then(function () {
            return knex('bids').del();
        })
        .then(function () {
            return knex('users-bids').del();
        })
        .then(function () {
            return knex('items').del();
        })
        .then(function () {
            return knex('users').del();
        })
        .then(function () {
            return knex('projects').del();
        })



        .then(function () {
            return knex('users').insert(usersData);
        })

        .then(function () {
            return knex('projects').insert(projectsData);
        })

        .then(function () {
            return knex('items').insert(itemsData);
        })

        .then(function () {
            return knex('bids').insert(bidsData);
        })

        .then(function () {
            return knex('users-bids').insert(userBidsData);
        })
};