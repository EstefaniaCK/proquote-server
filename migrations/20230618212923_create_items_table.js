
exports.up = function (knex) {
    return knex.schema.createTable('items', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.string('unit');
        table.integer('quantity');
        table.integer('project_id').unsigned().notNullable();
        table.foreign('project_id').references('projects.id');
    });

};


exports.down = function (knex) {
    return knex.schema.dropTable('items');
};
