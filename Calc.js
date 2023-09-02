// 4. Simple Calc
// Create a node js command-line program "Calc" which accepts a question as
// string eg "What is 5 plus 7?". This program parses the question and calculate
// the result and print it eg: "5 plus 7 is 12".
// Program should support for add, subtract, multiply and divide operations.
// Input arg: What is 5 plus 7?
// Output: 5 plus 7 is 12
// Input arg: What is 9 minus 3?
// Output: 9 minus 3 is 6
// Input arg: What is 24 multiplied by 2?
// Output: 24 multiplied by 2 is 48
// Input arg: What is 60 divided by 5?
// Output: 60 divided by 5 is 12

function simpleCalc(expression) {
  const parts = expression.match(/(\d+)\s+(\w+(\s+\w+)*)\s+(\d+)\?/);
  if (!parts) {
    return 'Unsupported operation';
  }

  const num1 = parseInt(parts[1]);
  const operatorText = parts[2];
  const num2 = parseInt(parts[4]);
  if (isNaN(num1) || isNaN(num2)) {
    return 'Invalid numbers in the question';
  }

  let result;
  switch (operatorText) {
    case 'plus':
      result = num1 + num2;
      break;
    case 'minus':
      result = num1 - num2;
      break;
    case 'multiplied by':
      result = num1 * num2;
      break;
    case 'divided by':
      if (num2 === 0) {
        return 'Division by zero is not allowed';
      }
      result = num1 / num2;
      break;
    default:
      return 'Unsupported operation';
  }

  return `${num1} ${operatorText} ${num2} is ${result}`;
}

const inputStr1 = 'What is 5 plus 7?';
console.log(inputStr1);
const outputStr1 = simpleCalc(inputStr1);
console.log(outputStr1);

const inputStr2 = 'What is 9 minus 3?';
console.log(inputStr2);
const outputStr2 = simpleCalc(inputStr2);
console.log(outputStr2);

const inputStr3 = 'What is 24 multiplied by 2?';
console.log(inputStr3);
const outputStr3 = simpleCalc(inputStr3);
console.log(outputStr3);

const inputStr4 = 'What is 60 divided by 5?';
console.log(inputStr4);
const outputStr4 = simpleCalc(inputStr4);
console.log(outputStr4);
