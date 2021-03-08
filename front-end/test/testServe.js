const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
app.post('/species', (req, res) => {
    const speciesName = req.query.speciesName;
    if (speciesName.toString().toLowerCase() === "gorilla gorilla") {
        res.status(200).json(
            {
                "ScientificName": speciesName,
                "MapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386733.09012575535!2d-112.20066948817527!3d40.77626912917434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1615182610250!5m2!1sen!2sus",
                "CommonName": "Gorilla",
                "ImageLink": "https://media.beam.usnews.com/8a/f640ca3be61ba64b99383168f4d4e6/media:6c67c0899430436c8f5b46e1b3b61c45Gorilla_Family_Feud_89144.jpg",
                "DNA": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "pongo pygmaeus") {
        res.status(200).json(
            {
                "Scientific Name": speciesName
            }
        )
    } else {
        return res.status(404).json({ "error": speciesName + ' does not have a response. Please create one in /front-end/test/testServe.js'});
    }
})

app.listen(port, () => {
    console.log(`Test server listening at http://localhost:${port}`)
})