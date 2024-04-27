const { table } = require("..");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('todolist', function(table) {
    table.increments('id').primary()
    table.integer('user_id').unsigned()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.boolean('done').defaultTo(false)
    table.timestamps(true, true)
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('todolist')
};
