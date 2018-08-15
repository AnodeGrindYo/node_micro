//module.exports = (req, res) => { res.end("Welcome on my great microservice!! ") }

/**
 * this function generates a random number
 */
function randomNumber() {
    return Math.random();
}

module.exports = (req, res) => {
    const number = randomNumber();
    // here's the json that will be returned
    return {
        num: number
    }
}