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
        res.send('Species Name: ' + speciesName);
    } else if (speciesName.toString().toLowerCase() === "pongo") {
        res.send(speciesName)
    } else {
        return res.status(404).json({ "error": speciesName + ' does not have a response. Please create one in /front-end/test/testServe.js'});
    }
})

app.listen(port, () => {
    console.log(`Test server listening at http://localhost:${port}`)
})