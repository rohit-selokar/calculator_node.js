const process = require("process");

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log("Usage: node index.js <operation> <num1> <num2>");
  process.exit(1);
}

const operation = args[0].toLowerCase();

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "cannot divide by zero";
  }
}

function sin(angle) {
  return Math.sin(angle);
}

function cos(angle) {
  return Math.cos(angle);
}

function tan(angle) {
  return Math.tan(angle);
}

function generateRandomNumber(length) {
  const crypto = require("crypto");
  const bytes = crypto.randomBytes(Math.ceil(length / 2));
  return parseInt(bytes.toString("hex").slice(0, length), 16);
}

let result;

switch (operation) {
  case "add":
    result = add(parseFloat(args[1]), parseFloat(args[2]));
    break;
  case "sub":
    result = subtract(parseFloat(args[1]), parseFloat(args[2]));
    break;
  case "mult":
    result = multiply(parseFloat(args[1]), parseFloat(args[2]));
    break;
  case "divide":
    result = divide(parseFloat(args[1]), parseFloat(args[2]));
    break;
  case "sin":
    result = sin(parseFloat(args[1]));
    break;
  case "cos":
    result = cos(parseFloat(args[1]));
    break;
  case "tan":
    result = tan(parseFloat(args[1]));
    break;
  case "random":
    const length = args.length > 1 ? parseInt(args[1]) : 8;
    result = generateRandomNumber(length);
    break;
  default:
    console.log(
      "Invalid operation. Supported operations: add, sub, mult, divide, sin, cos, tan, random"
    );
    process.exit(1);
}

console.log(`Result: ${result}`);
