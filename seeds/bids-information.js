/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('bids').del()
  await knex('bids').insert([
    {
      item_id: 1,
      user_id: 2,
      project_id: 1,
      unit_price: 45
    },
    {
      item_id: 2,
      user_id: 2,
      project_id: 1,
      unit_price: 67
    },
    {
      item_id: 3,
      user_id: 2,
      project_id: 1,
      unit_price: 9
    },
    {
      item_id: 4,
      user_id: 2,
      project_id: 1,
      unit_price: 24
    },
    {
      item_id: 5,
      user_id: 2,
      project_id: 1,
      unit_price: 4
    },
    {
      item_id: 1,
      user_id: 3,
      project_id: 1,
      unit_price: 40
    },
    {
      item_id: 2,
      user_id: 3,
      project_id: 1,
      unit_price: 68
    },
    {
      item_id: 3,
      user_id: 3,
      project_id: 1,
      unit_price: 7
    },
    {
      item_id: 4,
      user_id: 3,
      project_id: 1,
      unit_price: 20
    },
    {
      item_id: 5,
      user_id: 3,
      project_id: 1,
      unit_price: 3.5
    },
  ]);
};
