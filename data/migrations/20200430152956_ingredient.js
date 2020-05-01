
exports.up = function(knex) {
    return knex.schema.createTable("ingredient", (tbl) => {
        tbl.increments("id")
        tbl.text("name")
        

    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("ingredient")
  
};
