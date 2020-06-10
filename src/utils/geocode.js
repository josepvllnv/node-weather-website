const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidmxsbnYiLCJhIjoiY2themY0cnhzMGQ0dTJ6cWs4MDF1MWxveSJ9.DL2B7f4ZV6zUjF7_2s3kMA'

    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to Geocode services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
          callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
          })
        }
    })
}

module.exports = geocode

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmxsbnYiLCJhIjoiY2themY0cnhzMGQ0dTJ6cWs4MDF1MWxveSJ9.DL2B7f4ZV6zUjF7_2s3kMA'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to Geocode service')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search')
//     } else {
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log('Latitude ' + response.body.features[0].center[1] + '. Longitude ' + response.body.features[0].center[0])
//     }
// })