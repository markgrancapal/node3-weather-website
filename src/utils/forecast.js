const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/c3729b7f77ad99192e2b06534cb189ac/'+ lat +',' + long

    request({url, json: true}, (error, { body }) => {
    if (error) {
        callback("Unable to connect to weather service!")
    } else if (body.error) {
        callback("Unable to find location")
    } else {
        const data = body.currently
        const info = body.daily.data[0].summary + " It is currently " + data.temperature + " degrees out."
        + " There is a " + data.precipProbability + "% chance of rain."
        callback(undefined, info)
    }
    })
}


module.exports = forecast