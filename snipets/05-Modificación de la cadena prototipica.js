/*
Esto no se recomienda hacer y se considera mala práctica
*/

const nombre = 'mánu';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

const apellido = 'FOSELA';

console.log(nombre.capitalize());
console.log(apellido.capitalize());