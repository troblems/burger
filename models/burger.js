//dependency
var orm = require('../config/orm.js');


// code to call to selectAll, insertOne, updateOne in ORM file.
var burger = {

  selectAll: function(callback){
    orm.selectAll(function(res){
      callback(res);
    });
  },

  insertOne: function(burgerName, callback){
    orm.insertOne(burgerName, function(res){
      callback(res);
    });
  },

  updateOne: function(burger_id, callback){
    orm.updateOne(burger_id, function(res){
      callback(res);
    });
  }

};


// Export!
module.exports = burger;
