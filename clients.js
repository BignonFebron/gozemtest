const {Client} = require("@googlemaps/google-maps-services-js");

const client = new Client({});
const google_key = "AIzaSyCRlexaP5qK3tUVjcv1WIbY__v2FkKkSHc";
exports.getplacefromcoordinates = function(lat,lng){
    client
    .({
        params: {
        locations: [{ lat: lat, lng: lng }],
        key: google_key,
        },
        timeout: 1000, // milliseconds
    })
    .then((r) => {
        console.log(r.data.results[0].elevation);
        return r.data.results[0].elevation
    })
    .catch((e) => {
        console.log(e.response.data.error_message);
    });
    }