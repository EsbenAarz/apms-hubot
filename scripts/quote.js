// Description:
//  I am very, very, smart. I have one of the highest IQs. This is my proof.
//
// Commands:
//   hubot quote random - I will give you a random quote
//   hubot quote <name> - I will give you a quote concerning <Name>
//   hubot cyber - I will teach you cyber. My son is very very good at it.
var cyber = require('./lib/cyber');

module.exports =  function(robot) {
    robot.respond(/quote\s(.+)/, function(res) {
        var name = res.match[1];
        robot.http('https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=' + name)
            .header('Accept', 'application/json')
            .get()(function(err, response, body) {
            if (err) {
                res.send('I do not make mistakes. I think Crooked Hillary have intercepted the request on her email-server. She should be put in prison.');
            }
            var quote = JSON.parse(body);
            res.send(quote.message);
        });
    });

    robot.respond(/quote\srandom/, function(res) {
        robot.http('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
            .header('Accept', 'application/json')
            .get()(function(err, response, body) {
            if (err) {
                res.send('I do not make mistakes. I think Crooked Hillary have intercepted the request on her email-server. She should be put in prison.');
            }
            var quote = JSON.parse(body);
            res.send(quote.message);
        });
    });

    robot.respond(/cyber/, function(res) {
        res.send(res.random(cyber));
    });
    robot.respond(/hillary/, function(res) {
        res.send('Did you mean Crooked Hillary? She is the devil. Unless I win. ');
    });
}
