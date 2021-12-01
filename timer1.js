const args = process.argv;
const sliced = args.slice(2, (args.length));

for (let i = 0; i < sliced.length; i++) {
  if (sliced[i] > 0) {
    setTimeout( () => {
      return process.stdout.write('\x07');
    }, (sliced[i] * 1000))
  }
};