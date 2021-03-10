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
app.use(function (req, res, next) {
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
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.669436405975!2d24.991250680858403!3d-1.0350099879791934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDInMDYuMCJTIDI0wrA1OSc1OS45IkU!5e0!3m2!1sen!2sus!4v1615328560970!5m2!1sen!2sus",
                "commonName": "Western Gorilla",
                "imageUrl": "https://live.staticflickr.com/65535/50971889047_fdb0508229_n.jpg",
                "dnaSequence": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "pongo pygmaeus") {
        res.status(200).json(
            {

                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.769122931824!2d113.07140668086105!3d1.2006899860560116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTInMDIuNSJOIDExM8KwMDQnNDguNSJF!5e0!3m2!1sen!2sus!4v1615328958251!5m2!1sen!2sus",
                "commonName": "Bornean Orangutan",
                "imageUrl": "https://live.staticflickr.com/65535/50971888902_7a270e7b18_n.jpg",
                "dnaSequence": "AAAABAAAAAAAAAABAAAAAAAAAABBBBBBABBBBBBBBBBBBABBBBBBBBBBBBBBBBBBABBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "lemur catta") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14701.768945673051!2d43.984857684535044!3d-22.89705376144023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUzJzQ5LjQiUyA0M8KwNTknMzYuOSJF!5e0!3m2!1sen!2sus!4v1615329925234!5m2!1sen!2sus",
                "commonName": "Ring-Tailed Lemur",
                "imageUrl": "https://live.staticflickr.com/65535/50981187331_dd31da0120_n.jpg",
                "dnaSequence": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "tarsius syrichta") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15805.686281456183!2d125.4446936813008!3d7.955311908768565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTcnMTkuMSJOIDEyNcKwMjcnMTIuMyJF!5e0!3m2!1sen!2sus!4v1615329856881!5m2!1sen!2sus",
                "commonName": "Philippine Tarsier",
                "imageUrl": "https://live.staticflickr.com/65535/50981186811_c9469827d3_n.jpg",
                "dnaSequence": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "saimiri sciureus") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15932.893607539743!2d-56.51051031907195!3d3.294773961809869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMTcnNDEuMiJOIDU2wrAzMCcwNi40Ilc!5e0!3m2!1sen!2sus!4v1615329784370!5m2!1sen!2sus",
                "commonName": "Guianan Squirrel Monkey",
                "imageUrl": "https://live.staticflickr.com/65535/50981295552_024f02ae29_n.jpg",
                "dnaSequence": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "macaca sylvanus") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13099.69291884901!2d-5.289701310772939!3d34.83302268794488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ5JzU4LjkiTiA1wrAxNic1MS41Ilc!5e0!3m2!1sen!2sus!4v1615329357922!5m2!1sen!2sus",
                "commonName": "Barbary Macaque",
                "imageUrl": "https://live.staticflickr.com/65535/50980479668_c4c4063b4d_n.jpg",
                "dnaSequence": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "macaca fascicularis") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3998501.152672282!2d108.50790571318967!3d-2.281736680575643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTgnMzcuOSJTIDExMcKwMTEnNDYuMyJF!5e0!3m2!1sen!2sus!4v1614900271335!5m2!1sen!2sus",
                "commonName": "Crab-Eating Macaque",
                "imageUrl": "https://live.staticflickr.com/65535/50979856573_a0a8dd97ed_n.jpg",
                "dnaSequence": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "macaca mulatta") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14548.088498972134!2d92.75585868498523!3d24.275957750552248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDE2JzMzLjUiTiA5MsKwNDUnNTIuNSJF!5e0!3m2!1sen!2sus!4v1615329261069!5m2!1sen!2sus",
                "commonName": "Rhesus Macaque",
                "imageUrl": "https://live.staticflickr.com/65535/50980670562_9286429d06_n.jpg",
                "dnaSequence": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "macaca fuscata") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12763.011181225322!2d139.20088469021283!3d36.89626168043244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUzJzQ2LjUiTiAxMznCsDEyJzM0LjYiRQ!5e0!3m2!1sen!2sus!4v1615329188437!5m2!1sen!2sus",
                "commonName": "Japanese Macaque",
                "imageUrl": "https://live.staticflickr.com/65535/50980670572_c7d9ea74ef_n.jpg",
                "dnaSequence": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "hylobates lar") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15566.830441094153!2d99.1024706820007!3d12.732487856911991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQzJzU3LjAiTiA5OcKwMDYnNDAuMyJF!5e0!3m2!1sen!2sus!4v1615329029511!5m2!1sen!2sus",
                "commonName": "Lar Gibbon",
                "imageUrl": "https://live.staticflickr.com/65535/50980540566_a2d5ae2f70_n.jpg",
                "dnaSequence": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    }else if (speciesName.toString().toLowerCase() === "pan troglodytes") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59896652.22923876!2d-27.00779870418854!3d0.5386769746600142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTAnNTcuOCJOIDE0wrA1Nic1Ni45IkU!5e0!3m2!1sen!2sus!4v1615328322060!5m2!1sen!2sus",
                "commonName": "Central Chimpanzee",
                "imageUrl": "https://live.staticflickr.com/65535/50971785511_7dbc37e283_n.jpg",
                "dnaSequence": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "homo sapiens") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.529659906828!2d13.701537680876374!3d1.8966909779827754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTMnNDguMSJOIDEzwrA0MiczNy4wIkU!5e0!3m2!1sen!2sus!4v1615327503642!5m2!1sen!2sus",
                "commonName": "Human",
                "imageUrl": "https://live.staticflickr.com/65535/50971091538_cea5924c6f_n.jpg",
                "dnaSequence": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else {
        return res.status(404).json({"error": speciesName + ' does not have a response. Please create one in /front-end/test/testServe.js'});
    }
})

app.listen(port, () => {
    console.log(`Test server listening at http://localhost:${port}`)
})