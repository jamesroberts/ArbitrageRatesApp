const axios = require('axios')

function getLunoPrices() {
    return axios.get(process.env.LUNO_URL)
        .then(response => response.data.bid)
        .catch(error => handleError(error));
}

function getValrPrices() {
    return axios.get(process.env.VALR_URL)
        .then(response => response.data.bidPrice)
        .catch(error => handleError(error));
}

function getKrakenPrices() {
    return axios.get(process.env.KRAKEN_URL)
        .then(response => response.data.result.XXBTZEUR.b[0])
        .catch(error => handleError(error));
}

function handleError(error) {
    // For now just log it
    // TODO: Handle this better
    console.log(error)
}

export default async function getPrices() {
    return {
        luno: await getLunoPrices(),
        valr: await getValrPrices(),
        kraken: await getKrakenPrices(),
    };
};