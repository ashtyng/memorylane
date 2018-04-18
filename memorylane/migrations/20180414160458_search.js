exports.up = function(knex, Promise) {
  return Promise.all([
    knex.raw("alter table memories add fulltext(memory)"),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.raw("alter table memories drop index memory"),
  ]);
};