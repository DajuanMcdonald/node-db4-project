
exports.up = function(knex) {
    return knex.schema.createTable("ingredient", (tbl) => {
        tbl.increments("ingredient_id")
        tbl.text("name")
        

    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("ingredient")
  
};
