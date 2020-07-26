var readline = require('readline-sync');

var a = perseInt(readline.question("Masukan Nilai a\n"));
var b = perseInt(readline.question("Masukan Nilai b\n"));

console.log(`${a}+${b}=${a+b}`);
console.log(`${a}-${b}=${a-b}`);
console.log(`${a}*${b}=${a*b}`);
console.log(`${a}/${b}=${a/b}`);
console.log(`${a}%${b}=${a%b}`);
console.log(`${a}**${b}=${a**b}`);