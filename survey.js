const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) :` , (answer0) => {
  rl.question(`What's an activity you like doing? :` , (answer1) => {
    rl.question(`What do you listen to while doing that? :` , (answer2) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) :` , (answer3) => {
        rl.question(`What's your favourite thing to eat for that meal? :` , (answer4) => {
          rl.question(`Which sport is your absolute favourite? :` , (answer5) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! :` , (answer6) => {
              console.log(`${answer0} loves listening to ${answer2} while ${answer1}, devouring ${answer4} for ${answer3}, prefers ${answer5} over any other sport, and is amazing at ${answer6}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});