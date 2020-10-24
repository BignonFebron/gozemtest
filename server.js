const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const {Client} = require("@googlemaps/google-maps-services-js");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// define a base route
app.get('/', (req, res) => {
    res.json({"message": "Gozem backend developper test."});
});

const client = new Client({});

app.get('/test', (req, res) => {
    client
  .elevation({
    params: {
      locations: [{ lat: 45, lng: -110 }],
      key: "AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU",
    },
    timeout: 1000, // milliseconds
  })
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log(e.response.data.error_message);
  });
    res.json({"message": "test exec."});
});




// listen for requests
app.listen(7000, () => {
    console.log("Server is listening on port 7000");
});