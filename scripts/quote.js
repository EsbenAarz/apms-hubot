// Description:
//  I am very, very, smart. I have one of the highest IQs. This is my proof.
//
// Commands:
//   hubot quote - I will give you a quote
//   hubot cyber - I will teach you cyber. My son is very very good at it.
var quotes = require('./lib/quotes');
var cyber = require('./lib/cyber');

module.exports =  function(robot) {
    robot.respond(/quote/, function(res) {
        res.send(res.random(quotes));
    });

    robot.respond(/cyber/, function(res) {
        res.send(res.random(cyber));
    });
    robot.respond(/hillary/, function(res) {
        res.send('Did you mean Crooked Hillary? She is the devil. Unless I win. ');
    });
}
