
exports.up = function(knex) {
    return knex.schema.createTable("instruction", (tbl) => {
        tbl.increments()
        tbl.integer("instruc_id")
        .references("id")
        .inTable("recipe")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        tbl.text("directions")
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("instruction")
  
};
