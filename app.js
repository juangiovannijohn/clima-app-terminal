import  {inquirerMenu, leerInput, pausa} from './helpers/inquirer.js';
import { Busquedas } from './models/busquedas.js';


const main = async () =>{
let opt;
const busquedas = new Busquedas();
do {
    opt = await inquirerMenu();
    switch (opt) {
        case 1:
            //TODO:mostrar mensaje
            //TODO: ingresar el lugar
            const ciudad = await leerInput('Localidad/Ciudad/Pais:')
            //TODO: mostrar todos los lugares q coincidan
            //TODO: seleccionar
            await busquedas.buscarCiudad(ciudad);
            //TODO: mostrar datos del clima y resultados

            console.log(`
            Información de la ciudad
            `.green);
            console.log('Ciudad: ',) ;
            console.log('Lat: ',) ; 
            console.log('Lng: ',) ; 
            console.log('Temperatura: ',) ; 
            console.log('Mínima: ',) ; 
            console.log('Máxima: ',) ; 
        break;
        case 2:
            //TODO:
            console.log('Opcion Seleccionada: ', opt)
        break;
        case 0:
            //TODO:
            console.log('Opcion Seleccionada: ', opt)
        break;
    
    }
    await pausa();
    
} while (opt !== 0);

}
main();