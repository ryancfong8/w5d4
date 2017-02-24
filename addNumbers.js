const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    reader.close();
    return completionCallback(sum);
  }
  reader.question("Enter a number: ", function (numString1) {
    const num1 = parseInt(numString1);
    let sum1 = sum + num1;
    console.log(sum1);
    let numsLeft1 = numsLeft - 1;
    addNumbers(sum1, numsLeft1, completionCallback);
  });

}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
