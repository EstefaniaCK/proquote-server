exports.up = function (knex) {
    return knex.schema.createTable('users-bids', function (table) {
        table.increments('id').primary();
        table.integer('bid_id').unsigned().notNullable();
        table.integer('item_id').unsigned().notNullable();
        table.decimal('unit_price', 10, 2).notNullable();


        table.foreign('item_id').references('items.id');
        table.foreign('bid_id').references('items.id');
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('bids');
};

