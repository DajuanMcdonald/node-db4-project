
exports.up = function(knex) {
    return knex.schema.createTable("ingredient", (tbl) => {
        tbl.increments("id")
        tbl.text("name")
        tbl.text("quantity")
        
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("ingredient")
  
};
