
exports.up = function (knex) {
    return knex.schema.createTable('bids', function (table) {
        table.increments('id').primary();
        table.integer('item_id').unsigned().notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.integer('project_id').unsigned().notNullable();
        table.decimal('unit_price', 10, 2).notNullable();


        table.foreign('item_id').references('items.id');
        table.foreign('user_id').references('users.id');
        table.foreign('project_id').references('projects.id');
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('bids');
};
