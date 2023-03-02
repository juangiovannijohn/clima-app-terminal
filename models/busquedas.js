import axios from 'axios';

class Busquedas{
    historial = ['Cordoba', 'Rio cuarto'];

    constructor(){
        //TODO leer base de datos si existe

    }
    get paramsMapbox(){
        return{
            'access_token':'pk.eyJ1IjoianVhbmdpb3Zhbm5pam9obiIsImEiOiJjbGVxMWt0NDYwaTFmM3hwYXgxbmtzNGtzIn0.-XKBFKvzXytf4VIhPWp4og',
            'language': 'es',
            'types':'country%2Cregion%2Clocality%2Cplace'
        }
    }
async buscarCiudad( ciudad= ''){
    try {
        //TODO peticion http
        const instance = axios.create({
            baseURL: `https://api.mapbox.com/`,
            timeout: 1000,
            //headers: {'X-Custom-Header': 'foobar'},
            params: {
                'access_token':'pk.eyJ1IjoianVhbmdpb3Zhbm5pam9obiIsImEiOiJjbGVxMWt0NDYwaTFmM3hwYXgxbmtzNGtzIn0.-XKBFKvzXytf4VIhPWp4og',
                'language': 'es',
                'types':'country%2Cregion%2Clocality%2Cplace'
            }
          }); 

        const resp = await instance.get(`geocoding/v5/mapbox.places/${ciudad}.json`);
        console.log(resp.data);
        
        return []; //retornar todos los lugares q coincidan
    } catch (error) {
        console.log(error.code)
        return []; //retornar todos los lugares q coincidan
    }

}




}

export {
    Busquedas
}