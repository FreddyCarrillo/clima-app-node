const axios = require('axios');

const getLugarLatLgn = async(dir) => {

    const access_token = 'pk.eyJ1IjoiZnJlZGN0IiwiYSI6ImNrZXZqeWZyaDBkcnMyc3FvM2V2ZmgwNWQifQ.UR5fiYiPCZ76lYKXGckEDQ';

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json`,
        params: {
            access_token
        }
    });

    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.features[0];
    const direccion = data.place_name;
    const lat = data.center[1];
    const lon = data.center[0];

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLgn
}