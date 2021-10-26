let args = process.argv.slice(2);
args = args.sort((a, b) => a - b)

for (let i = 0; i < args.length; i++) {
  let command = Number(args[i]) * 1000;
  console.log(command)
  if(command < 0 || isNaN(command)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, command)
}

