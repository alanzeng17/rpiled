
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('username').notNull();
    table.string('password').notNull();
    table.unique('username');
  });
};

exports.down = function(knex, Promise) {
  
};
