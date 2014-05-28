var greet = require("./greeter.js").greet;
var template = require("./template.html");
var dom = require('dom');

module.exports = function() {
  var greeting_target = dom(template);

  greet("Bob").then(function(greeting) {
    greeting_target.html(greeting);
  });

  return greeting_target;
};
