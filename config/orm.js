var connection = require('../config/connection.js');


var orm =
{
  selectAll: function(tableInput, callback)
  {
    var select = "SELECT * FROM " + tableInput + ";";
    connection.query(select, function(err, res)
    {
      if (err) throw err;
      callback(res);
    })
  }
}


var date = new Date(); //insertOne
   var timestamp = ''+ date.getFullYear() + '-';
   var month = '' + (date.getMonth() + 1);
     if(month.length == 1)
     {
       month = '0' + month;
     }
   timestamp += month + '-';
   var day = '' + date.getDate();
     if(day.length == 1)
     {
       day = '0' + day;
     }
   timestamp += day + ' ';
   var hour = '' + date.getHours();
     if(hour.length == 1)
     {
       hour = '0' + hour;
     }
   timestamp += hour + ':';
   var minute = '' + date.getMinutes();
     if(minute.length == 1)
     {
       minute = '0' + minute;
     }
   timestamp += minute + ':';
   var second = '' + date.getSeconds();
     if(second.length == 1)
     {
       second = '0' + second;
     }
   timestamp += second;


connection.query('INSERT INTO burgers SET ?', {
      burger_name: burger_name,
      devoured: false,
      date: timestamp
    }, function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },
var updateOne =
{
  updateOne: function(burgerName, callback){

    connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}, {id: burgerName}], function (err, result) {
        if (err) {throw err};
        callback(result);
      });

  }

};

module.exports = orm;
