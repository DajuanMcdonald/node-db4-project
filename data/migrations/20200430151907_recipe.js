
exports.up = function(knex) {
    return knex.schema.createTable("recipe", (tbl) => {
        tbl.increments()
        tbl.text("name")
        tbl.float("quantity")
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("recipe")
  
};
