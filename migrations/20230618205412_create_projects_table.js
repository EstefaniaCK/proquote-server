
exports.up = function (knex) {
    return knex.schema.createTable('projects', function (table) {
        table.increments('project_id').primary();
        table.string('project_name').notNullable();
        table.string('municipality').notNullable();
        table.string('contract_no').notNullable();
        table.specificType('closing_date', 'date');
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('projects');
};
