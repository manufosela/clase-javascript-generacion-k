console.log('hola');
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
console.log('adios');
