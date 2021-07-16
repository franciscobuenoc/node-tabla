
    const fs = require('fs');
    const crearArchivo = async(base = 5, listar = false, hasta = 0) => {
        let salida = '';

        try{
            for (let index = 1; index <= hasta; index++) {
                salida += (`${base} * ${index} = ${base*index}\n`); 
                if(listar){
                    console.log(salida);
                }
            }
                
                    
        
            fs.writeFileSync(`C:/Users/bueno/Node/03-bases-node/salida/tabla-${base}.txt`, salida);
            return(`tabla-${base}.txt creado`);
        }catch(err){
    throw err;
        }
    
    }

    module.exports = {
        crearArchivo
    }