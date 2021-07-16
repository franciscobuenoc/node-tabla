
const { crearArchivo } = require('C:/Users/bueno/Node/03-bases-node/helpers/multiplicar');
console.clear();
//Argumentos desde consola
console.log(process.argv);
const [,,arg3 = 'base = 5'] = process.argv;
const [, base = 5] = arg3.split('=');


console.log(base);


crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));




