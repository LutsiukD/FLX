var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

const avg = (...args) => args.reduce((sum, current) => sum + current) / args.length;

console.log(avg(...args));