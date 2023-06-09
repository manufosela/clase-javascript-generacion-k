// Los objetos iterables son una generalización de arrays. Es un concepto que permite que
// cualquier objeto pueda ser utilizado en un bucle for..of.

/*
const children = document.getElementById('upper-tabs-component').children;
for (child of children) {
  console.log(child);
}
*/

/*
function crearIterador(arreglo) {
  var siguienteIndice = 0;

  return {
    next: function () {
      return siguienteIndice < arreglo.length
        ? { value: arreglo[siguienteIndice++], done: false }
        : { done: true };
    },
  };
}

var it = crearIterador(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
// */
