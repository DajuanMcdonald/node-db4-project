
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instruction').del()
    .then(function () {
      // Inserts seed entries
      return knex('instruction').insert([
        {directions: 'Boil Water'},
        {directions: 'Boil Milk'},
        {directions: 'Heat Pan'}
      ]);
    });
};
