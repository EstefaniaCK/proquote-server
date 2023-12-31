exports.up = function (knex) {
    return knex.schema.createTable('projects', function (table) {
        table.increments('id').primary();
        table.string('project_name').notNullable();
        table.string('municipality').notNullable();
        table.string('contract_no').notNullable();
        table.specificType('closing_date', 'date').notNullable();
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('projects');
};
