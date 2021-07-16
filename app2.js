const { crearArchivo } = require('C:/Users/bueno/Node/03-bases-node/helpers/multiplicar');
const argv = require('C:/Users/bueno/Node/03-bases-node/config/yargs');



crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));
