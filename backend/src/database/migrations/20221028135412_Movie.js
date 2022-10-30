/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('movies', function(table) {
    table.increments()

    table.string('name').notNullable()
    table.string('description').notNullable()
    table.integer('year').notNullable()
    table.integer('evaluation').notNullable()
    table.text('photo', 'longtext').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('movies')
};
