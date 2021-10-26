const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const beepFunction = (answer) => {
  answer = answer.toLocaleLowerCase();
  if(isNaN(answer) && answer !== 'b') {
    rl.question("Please enter a number\n",beepFunction);
  }
  if(answer === 'b') {
    process.stdout.write('\x07');
    rl.question("Wanna try again?\n",beepFunction);
  }
  if(Number(answer)) {
    console.log(`Setting timer for ${answer} seconds`);
    setTimeout(() => {
      process.stdout.write('\x07');
      rl.question("Wanna try again?\n",beepFunction);
    }, answer * 1000)
  }

  if(answer === 'q') {
    rl.close();
  }
}


rl.question("I am an interactive timer. In how many secons do you want me to beep?\n",beepFunction);

rl.on("close", function() {
  console.log("\nThanks for using me, ciao!");
  process.exit(0);
});