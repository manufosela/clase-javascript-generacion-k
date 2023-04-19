console.log('hola');
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
console.log('adios');
