class Saludo {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hola() {
    return `Hola, ${this.nombre}`;
  }
}
const saludo = new Saludo('pepe');
console.log(saludo.hola());