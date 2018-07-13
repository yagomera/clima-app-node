const axios = require('axios');





const getLugarLatLng = async(direccion) => {


    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error('No se encuentra dirección');
    }


    //  console.log(JSON.stringify(resp.data, undefined, 2));
    let lat = resp.data.results[0].geometry.location.lat;
    let lng = resp.data.results[0].geometry.location.lng
    let address = resp.data.results[0].formatted_address;

    //  console.log(`${address} lat: ${lat} long: ${lng}`);







    return {
        direccion: address,
        lat: lat,
        lng: lng
    }

}

module.exports = {
    getLugarLatLng
}