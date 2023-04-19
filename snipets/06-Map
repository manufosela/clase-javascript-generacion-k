const personas = [
  { id: "U0034001", nombre: "Juan", apellido: "Fernandez", profesion: "developer" },
  { id: "U0034002", nombre: "Luisa", apellido: "Gonzalez", profesion: "developer" },
  { id: "U0034003", nombre: "Andres", apellido: "Garcia", profesion: "devops" },
  { id: "U0034004", nombre: "Ana", apellido: "Hernandez", profesion: "UX/UI" },
  { id: "U0034005", nombre: "Pedro", apellido: "Picapiedra", profesion: "developer" },
  { id: "U0034006", nombre: "Julia", apellido: "Agosta", profesion: "scrum-master" },
  { id: "U0034007", nombre: "Jose", apellido: "de María", profesion: "developer" },
  { id: "U0034008", nombre: "Silvia", apellido: "Lopez", profesion: "devops" },
  { id: "U0034009", nombre: "Börj", apellido: "Krûfnt", profesion: "agile-coach" }
];
console.log('OBJETO');
console.table(personas);
console.log('\n\n');

const mapObj = new Map();
personas.reduce((mapObj, persona) => {
  mapObj.set(persona.id, persona.nombre + ' ' + persona.apellido);
  return mapObj;
}, mapObj);
console.log('OBJETO MAP');
console.table(mapObj);
console.log('\n\n');