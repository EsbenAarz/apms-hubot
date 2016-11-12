// Description:
//  Proposes a dinner
//
// Commands:
//   hubot middag - Proposes a dinner

var middag = require('./lib/middag');

module.exports =  function(robot) {
    robot.respond(/middag/, function(res) {
        res.send(res.random(middag));
    });
}