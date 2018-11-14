//const fs = require('express');
//const fs = require('./fs');

const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo tabla-${argv.base}.txt ha sido creado`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

//console.log(argv)

//console.log(process.argv);

//let argv2 = process.argv;

//console.log('limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1]


//crearArchivo(base)
//  .then(archivo => console.log(`El archivo tabla-${base}.txt ha sido creado`))
//.catch(e => console.log(e));