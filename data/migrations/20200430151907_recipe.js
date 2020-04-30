
exports.up = function(knex) {
    return knex.schema.createTable("recipe", (tbl) => {
        tbl.increments("id")
        tbl.text("name")
        tbl.float("quantity")
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("recipe")
  
};
