const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:  {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {

    try {

        let rptLugar = await lugar.getLugarLatLgn(direccion);
        let rptClimaLugar = await clima.getClima(rptLugar.lat, rptLugar.lon);
        return `El clima de ${rptLugar.direccion} es de ${rptClimaLugar}`;

    } catch (error) {

        throw new Error(`No se pudo determinar el clima de ${direccion}`);

    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(err => console.log(err.message));