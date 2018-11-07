const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=23ff4de1e14ea2bfd14f081cf7f02e68`)

    let clima = resp.data.main;
    return clima.temp
}

module.exports = {
    getClima
}