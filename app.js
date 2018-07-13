const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección para obtener el clima',
        demand: true

    }
}).argv;


/*
https://maps.googleapis.com/maps/api/geocode/json?address=Santiago+De+Compostela&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI

*/


console.log(argv.direccion);




getInfo = async() => {

    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es ${temp}`;
    } catch (err) {
        return 'No hay clima para direccion';
    }

}



getInfo()
    .then(resp => { console.log(resp); })
    .catch(err => { console.log(err); });




/*
lugar.getLugarLatLng(argv.direccion).then(resp => {


        clima.getClima(resp.lat, resp.lng).then(respclima => {
            console.log(resp);
            console.log(respclima);

        })

    })
    .catch(e => console.log(e));

    */