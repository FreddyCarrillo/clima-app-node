const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=1&appid=505986dc88bc5ae88bd168ca6b953c96`);
    return resp.data.list[0].main.temp;
}

module.exports = {
    getClima
}