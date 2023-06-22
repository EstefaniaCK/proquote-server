
exports.up = function (knex) {
    return knex.schema.createTable('bids', function (table) {
        table.increments('id').primary();
        table.integer('project_id').unsigned().notNullable();
        table.integer('user_id').unsigned().notNullable();
        
        
        table.foreign('user_id').references('users.id');
        table.foreign('project_id').references('projects.id');
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('bids');
};
