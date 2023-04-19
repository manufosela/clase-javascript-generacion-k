function multiply(a) {
  return function executeMultiply(b) {
    return a * b;
  }
}

const valor = multiply(4)(5);
console.log(valor); // 20

const double = multiply(2);
console.log(double(3)); // => 6
console.log(double(5)); // => 10

const triple = multiply(3);
console.log(triple(4)); // => 12