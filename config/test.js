var orm = require('./orm.js');

orm.selectAll("burgers", function(testing)
{
  console.log(testing)
})
