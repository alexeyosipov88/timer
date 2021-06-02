const args = process.argv.slice(2);
if (args) {
  let time;
  for (let i = 0; i < args.length; i++) {
    if (args[i] > 0 && typeof parseInt(args[i]) === "number") {
      time = args[i];
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    }
  }
}

