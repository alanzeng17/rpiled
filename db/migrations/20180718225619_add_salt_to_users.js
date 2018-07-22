
exports.up = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.string('salt');
    
  })
};

exports.down = function(knex, Promise) {
  
};
