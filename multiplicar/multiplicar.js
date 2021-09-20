// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }


}

/*
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        // Try - catch
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);

        });

    });

}
*/

// Otra forma de promesa

let crearArchivo = async (base, limite = 10) => {
	
	try{

		if (!Number(base)) {
		    reject(`El valor introducido ${ base } no es un número`);
		    return;
		}
	
	
        	let data = '';

		for (let i = 1; i <= limite; i++) {
		    data += `${ base } * ${ i } = ${ base * i }\n`;
		}

		// Try - catch
		fs.writeFileSync(`tablas/tabla-${ base }-al-${ limite }.txt`, data);
		return `tablas/tabla-${ base }-al-${ limite }.txt`;

	} catch(err){
		throw err;
	}

}


module.exports = {
    crearArchivo,
    listarTabla
}
