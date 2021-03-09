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

                "ScientificName": speciesName,
                "MapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65334052.59731062!2d78.05561483728009!3d-1.8785136045360042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sen!2sus!4v1615322010591!5m2!1sen!2sus",
                "CommonName": "Orangutan",
                "ImageLink": "https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0817/1179.jpeg",
                "DNA": "AAAABAAAAAAAAAABAAAAAAAAAABBBBBBABBBBBBBBBBBBABBBBBBBBBBBBBBBBBBABBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "lemur catta") {
        res.status(200).json(
            {
                "ScientificName": speciesName,
                "MapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7736500.549590312!2d42.37130713437203!3d-18.77192424210683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21d1a4e3ea238545%3A0x5244e3c1977b1388!2sMadagascar!5e0!3m2!1sen!2sus!4v1615322449178!5m2!1sen!2sus",
                "CommonName": "Ring-tailed lemur",
                "ImageLink": "https://i.pinimg.com/originals/b1/1b/57/b11b577897fa22bcd51cdd3e72f7e139.jpg",
                "DNA": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "tarsius syrichta") {
        res.status(200).json(
            {
                "ScientificName": speciesName,
                "MapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16011005.384541586!2d113.57908740533652!3d11.556384075323246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324053215f87de63%3A0x784790ef7a29da57!2sPhilippines!5e0!3m2!1sen!2sus!4v1615322667563!5m2!1sen!2sus",
                "CommonName": "Philippine tarsier",
                "ImageLink": "https://cdn.britannica.com/28/148328-050-961326DE/eye-structure-tarsier-light-levels-animal.jpg",
                "DNA": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "saimiri sciureus") {
        res.status(200).json(
            {
                "ScientificName": speciesName,
                "MapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31754308.356149822!2d-69.6865109274439!3d-13.702797008748323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrazil!5e0!3m2!1sen!2sus!4v1615322810641!5m2!1sen!2sus",
                "CommonName": "Common squirrel monkey",
                "ImageLink": "https://images.fineartamerica.com/images-medium-large-5/common-squirrel-monkey-saimiri-sciureus-pete-oxford.jpg",
                "DNA": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "macaca sylvanus") {
        res.status(200).json(
            {
                "ScientificName": speciesName,
                "MapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386733.09012575535!2d-112.20066948817527!3d40.77626912917434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1615182610250!5m2!1sen!2sus",
                "CommonName": "Barbary Ape",
                "ImageLink": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Gibraltar_Barbary_Macaque.jpg",
                "DNA": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "macaca fascicularis") {
        res.status(200).json(
            {
                "ScientificName": speciesName,
                "MapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386733.09012575535!2d-112.20066948817527!3d40.77626912917434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1615182610250!5m2!1sen!2sus",
                "CommonName": "Crab-eating macaque",
                "ImageLink": "https://www.junglequeen.com/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=500&h=500&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F7%2F21.jpg",
                "DNA": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "macaca mulatta") {
        res.status(200).json(
            {
                "ScientificName": speciesName,
                "MapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386733.09012575535!2d-112.20066948817527!3d40.77626912917434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1615182610250!5m2!1sen!2sus",
                "CommonName": "Rhesus macaque",
                "ImageLink": "https://media.beam.usnews.com/8a/f640ca3be61ba64b99383168f4d4e6/media:6c67c0899430436c8f5b46e1b3b61c45Gorilla_Family_Feud_89144.jpg",
                "DNA": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "macaca fuscata") {
        res.status(200).json(
            {
                "ScientificName": speciesName,
                "MapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386733.09012575535!2d-112.20066948817527!3d40.77626912917434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1615182610250!5m2!1sen!2sus",
                "CommonName": "Japanese macaque",
                "ImageLink": "https://media.beam.usnews.com/8a/f640ca3be61ba64b99383168f4d4e6/media:6c67c0899430436c8f5b46e1b3b61c45Gorilla_Family_Feud_89144.jpg",
                "DNA": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "hylobates lar") {
        res.status(200).json(
            {
                "ScientificName": speciesName,
                "MapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386733.09012575535!2d-112.20066948817527!3d40.77626912917434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1615182610250!5m2!1sen!2sus",
                "CommonName": "Lar gibbon",
                "ImageLink": "https://media.beam.usnews.com/8a/f640ca3be61ba64b99383168f4d4e6/media:6c67c0899430436c8f5b46e1b3b61c45Gorilla_Family_Feud_89144.jpg",
                "DNA": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    }else if (speciesName.toString().toLowerCase() === "pan troglodytes") {
        res.status(200).json(
            {
                "ScientificName": speciesName,
                "MapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386733.09012575535!2d-112.20066948817527!3d40.77626912917434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1615182610250!5m2!1sen!2sus",
                "CommonName": "Chimpanzee",
                "ImageLink": "https://media.beam.usnews.com/8a/f640ca3be61ba64b99383168f4d4e6/media:6c67c0899430436c8f5b46e1b3b61c45Gorilla_Family_Feud_89144.jpg",
                "DNA": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else if (speciesName.toString().toLowerCase() === "homo sapiens") {
        res.status(200).json(
            {
                "ScientificName": speciesName,
                "MapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386733.09012575535!2d-112.20066948817527!3d40.77626912917434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1615182610250!5m2!1sen!2sus",
                "CommonName": "Human",
                "ImageLink": "https://media.beam.usnews.com/8a/f640ca3be61ba64b99383168f4d4e6/media:6c67c0899430436c8f5b46e1b3b61c45Gorilla_Family_Feud_89144.jpg",
                "DNA": "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB"
            }
        )
    } else {
        return res.status(404).json({"error": speciesName + ' does not have a response. Please create one in /front-end/test/testServe.js'});
    }
})

app.listen(port, () => {
    console.log(`Test server listening at http://localhost:${port}`)
})