/** Clase con prototype ES5 */
function Saludo(nombre) {
  this.nombre = nombre;
}
Saludo.prototype.hola = function () {
  return 'Hola, ' + this.nombre;
};
const saludo = new Saludo('pepe');
console.log(saludo.hola());
