
exports.up = function(knex) {
    return knex.schema.createTable("instruction", (tbl) => {
        tbl.increments("id")
        tbl.text("steps")
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("instruction")
  
};
