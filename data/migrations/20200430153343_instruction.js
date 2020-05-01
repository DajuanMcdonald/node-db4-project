
exports.up = function(knex) {
    return knex.schema.createTable("instruction", (tbl) => {
        tbl.increments()
        tbl.integer("recipe_id")
        .references("id")
        .inTable("recipe")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        tbl.text("directions")
        tbl.float("quantity")
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("instruction")
  
};
