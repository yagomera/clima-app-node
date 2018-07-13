const axios = require('axios');


const getClima = async(lat, lng) => {


    let url = 'https://api.openweathermap.org/data/2.5/weather?';
    url += `lat=${lat}&lon=${lng}`;
    url += '&units=metric&appid=a67c10192eb3c6b9e2c518dfcec91b5d';


    let resp = await axios.get(url);

    //console.log(resp);

    return resp.data.main.temp
}

module.exports = {
    getClima

}