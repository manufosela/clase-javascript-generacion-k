function bucleFor(myArr) {
  console.time('for'); 
  for(var i=0; i<myArr.length; i++) { 
    let opnotused = i * myArr[i];
  }
  console.timeEnd('for');
}

function bucleForOf(myArr) {
  console.time('forof');
  var i = 0;
  for(const valor of myArr.entries()) {
    let opnotused = i++ * valor;
  }
  console.timeEnd('forof');
}

function bucleForOfConDesestruct(myArr) {
  console.time('forofdes');
  for(const [index, valor] of myArr.entries()) {
    let opnotused = index * valor;
  }
  console.timeEnd('forofdes');
}

function bucleWhile(myArr) {
  console.time('while');
  var i=0;
  while(i++ < myArr.length) { 
    let opnotused = i * myArr[i];
  }
  console.timeEnd('while');
}

function metodoForEach(myArr) {
  console.time('forof');
  myArr.forEach((valor, index) => {
    let opnotused = index * valor;
  });
  console.timeEnd('forof');
}

const myArr = Array.from(Array(100).keys());
const myArr2 = Array.from(Array(1000).keys());
const myArr3 = Array.from(Array(100000).keys());
const myArr4 = Array.from(Array(1000000).keys());

console.log('Array de longitud 100');
console.log('bucle for');
bucleFor(myArr);
console.log('bucle for..of');
bucleForOf(myArr);
console.log('bucle for..of con desestructuración');
bucleForOfConDesestruct(myArr);
console.log('bucle while');
bucleWhile(myArr);
console.log('metodo forEach');
metodoForEach(myArr);


console.log('Array de longitud 1000');
console.log('bucle for');
bucleFor(myArr2);
console.log('bucle for..of');
bucleForOf(myArr2);
console.log('bucle for..of con desestructuración');
bucleForOfConDesestruct(myArr2);
console.log('bucle while');
bucleWhile(myArr2);
console.log('metodo forEach');
metodoForEach(myArr2);

console.log('Array de longitud 100000');
console.log('bucle for');
bucleFor(myArr3);
console.log('bucle for..of');
bucleForOf(myArr3);
console.log('bucle for..of con desestructuración');
bucleForOfConDesestruct(myArr3);
console.log('bucle while');
bucleWhile(myArr3);
console.log('metodo forEach');
metodoForEach(myArr3);

console.log('Array de longitud 1000000');
console.log('bucle for');
bucleFor(myArr4);
console.log('bucle for..of');
bucleForOf(myArr4);
console.log('bucle for..of con desestructuración');
bucleForOfConDesestruct(myArr4);
console.log('bucle while');
bucleWhile(myArr4);
console.log('metodo forEach');
metodoForEach(myArr4);