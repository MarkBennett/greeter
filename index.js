var greet = require("./greeter.js").greet;
var template = require("./template.html");
var dom = require('dom');

module.exports = function(name) {
  var greeting_target = dom(template);

  greet(name).then(function(greeting) {
    greeting_target.html(greeting);
  });

  return greeting_target;
};
