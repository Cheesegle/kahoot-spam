const Kahoot = require("kahoot.js-updated");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Game code: ", function(code) {
    rl.question("Amount of bots: ", function(amount) {
        rl.question("Bot name: ", function(name) {
            for (var i = 1; i <= amount; i++) {
                let e = i;
                setTimeout(function() {
                    let client = new Kahoot();

                    client.join(code, name + e).catch(err => {})

                    client.on("QuestionStart", question => {
                        setTimeout(function() {
                            question.answer(0).catch(err => {})
                            console.log('#' + e + ' answered!')
                        }, e * 15);
                    });

                    console.log("Joining kahoot... #" + e + '/' + amount);
                }, e * 25);
            }

        });
    });
});

rl.on("close", function() {
    console.log("\nbanana");
    process.exit(0);
});