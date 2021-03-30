const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

const corsOptions = {
    origin: 'http://localhost:4000',
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
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8170117.61340418!2d6.973386580735676!3d-0.9098795638486569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b8a5438f3ed%3A0x7b0cc30e36786b15!2sGabon!5e0!3m2!1sen!2sus!4v1616272483131!5m2!1sen!2sus",
                "commonName": "Western Gorilla",
                "imageUrl": "https://live.staticflickr.com/65535/51069999821_9bcc99f6dd_w.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCTATCCTAATCGCCATAGCATTCCTAATGCTAACCGAACGAAAAATT",
                    "TTAGGCTATATACAACTACGTAAAGGCCCCAACGTCGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCTCAACATCAACC",
                    "ATCACCCTCTACATCACCGCCCCAACCTTAGCTCTCACTATTGCCCTACTATTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "pongo pygmaeus") {
        res.status(200).json(
            {

                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35370843.85786945!2d93.39640795176349!3d-3.590856094596611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sen!2sus!4v1616272670227!5m2!1sen!2sus",
                "commonName": "Bornean Orangutan",
                "imageUrl": "https://live.staticflickr.com/65535/51070097432_e4e9b4e0dd_w.jpg",
                "dnaSequences": [
                    "CTCCTCACTATATCTATCCTAATCGCCATAGCATTTCTAATGCTAACCGAACGAAAAATC",
                    "CTAGGCTATACACAACTACGCAAGGGACCTAACATCGTAGGCCCCTGCGGCCTACTACAA",
                    "CCCTTTGCTGACGCCCTAAAACTATTCACCAAAGAACCCCTAAAACCCTCCACATCAACC",
                    "ACCATCCTCTACATTGTCTCCCCCGCCCTAGCCCTCACCATTGCCCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "lemur catta") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15487956.833650911!2d37.830637202150626!3d-18.60829614662275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21d1a4e3ea238545%3A0x5244e3c1977b1388!2sMadagascar!5e0!3m2!1sen!2sus!4v1616273700919!5m2!1sen!2sus",
                "commonName": "Ring-Tailed Lemur",
                "imageUrl": "https://live.staticflickr.com/65535/51069299753_174752c1cd_w.jpg",
                "dnaSequences": [
                    "CTACTAATTATCCCTATTTTACTCGCTATAGCTTTCCTTACATTAGCTGAACGAAAAATT",
                    "TTAGGCTACATACAACTTCGAAAGGGCCCTAACGTAGTAGGTCCTCACGGTATAATTCAA",
                    "CCCTTTGCTGACGCAATAAAACTATTCATTAAAGAACCACTACGACCCCTAACCTCTTCC",
                    "TCATCACTCTATACTATTGCACCAACACTAGCTCTAACCATCGCACTTGTAACATGAATC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "tarsius syrichta") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16011010.91028031!2d113.57599198208293!3d11.556287369860312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324053215f87de63%3A0x784790ef7a29da57!2sPhilippines!5e0!3m2!1sen!2sus!4v1616273651399!5m2!1sen!2sus",
                "commonName": "Philippine Tarsier",
                "imageUrl": "https://live.staticflickr.com/65535/51000816985_cd9e73d18a_w.jpg",
                "dnaSequences": [
                    "ATCCTAATCATCCCAATTCTTCTAGCCATAGCCTTCTTAACATTGGCAGAACGCAAAGTA",
                    "CTAGGTTATATACAACTCCGAAAAGGCCCTAACATCATTGGACCCTATGGTCTCCTTCAA",
                    "CCCTTTGCAGATGCAATAAAACTATTTATCAAAGAACCCCTCCACCCACTTACATCAACA",
                    "TCCCTACTTTATATTATTGCACCTACCCTTGCTCTATCCCTAGCCCTCATTATATGAATT"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "saimiri sciureus") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8140939.004630993!2d-63.45203592441128!3d4.928304703024257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dafefaf60d8c2b3%3A0x48e38867b6e54440!2sGuyana!5e0!3m2!1sen!2sus!4v1616273586408!5m2!1sen!2sus",
                "commonName": "Guianan Squirrel Monkey",
                "imageUrl": "https://live.staticflickr.com/65535/51070097302_0456aaca5c_w.jpg",
                "dnaSequences": [
                    "CTACTAATTGTCCCCACCCTAATTGCCATGGCCTTCTTGACACTTACAGAACGAAAAATT",
                    "TTAGGCTACATACAACTTCGCAAAGGCCCTAATACCATCGGCCCATATGGAATACTCCAA",
                    "CCAATTGCTGATGCAATAAAACTTTTCACCAAAGAGCCCCTACTTCCCACAACATCCACC",
                    "ACAACTCTATACGTAATTGCCCCTATTCTAGCCCTTTCAGTCGCCCTTATCCTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "macaca sylvanus") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6950462.292007115!2d-11.64417859764492!3d31.721892749050333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88619651c58d%3A0xd9d39381c42cffc3!2sMorocco!5e0!3m2!1sen!2sus!4v1616273441374!5m2!1sen!2sus",
                "commonName": "Barbary Macaque",
                "imageUrl": "https://live.staticflickr.com/65535/51070097512_528270f28c_w.jpg",
                "dnaSequences": [
                    "CTTCTAATTATATCTACATTAGCCGCCATAGCATTCCTCACACTCGTTGAGCGAAAACTA",
                    "CTGGGTCACATACAACTACGAAAAGGACCCAACATTGTAGGCCCACACGGACTATTACAA",
                    "CCCTTCGCTGATGCCATAAAACTCTTCACCAAAGAACCCTTGAAACCCTCAACATCCACC",
                    "ACTGCCCTTTATATTTTCGCACCCGCCCTAGCCTTCTTCATTGCCCTCCTCCTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "macaca fascicularis") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8149950.532543858!2d105.11908077932058!3d4.127919265627727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3034d3975f6730af%3A0x745969328211cd8!2sMalaysia!5e0!3m2!1sen!2sus!4v1616273373892!5m2!1sen!2sus",
                "commonName": "Crab-Eating Macaque",
                "imageUrl": "https://live.staticflickr.com/65535/51069999731_82617debe7_w.jpg",
                "dnaSequences": [
                    "CTTATAATCATACCCACATTAGCTGCCATAGCATTCCTCACACTCGTCGAACGAAAACTA",
                    "CTAGGCTACATGCAACTACGAAAAGGGCCCAACGTTGTAGGTCCATTTGGACTATTACAA",
                    "CCTTTCGCCGACGCTGTAAAACTTTTCACTAAAGAACCCCTAAAACCCTCAACATCTACC",
                    "ACCACCCTATATATTATCGCACCCGCTCTAGCCTTCTTCATTACCCTTCTCCTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "macaca mulatta") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15472203.423984265!2d87.63428603298972!3d18.780612852662163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305652a7714e2907%3A0xba7b0ee41c622b11!2sMyanmar%20(Burma)!5e0!3m2!1sen!2sus!4v1616273229021!5m2!1sen!2sus",
                "commonName": "Rhesus Macaque",
                "imageUrl": "https://live.staticflickr.com/65535/51069999641_457657a061_w.jpg",
                "dnaSequences": [
                    "CTTATAATCATACCCACATTAGCCGCCATAGCATTTCTCACACTCGTTGAACGAAAATTA",
                    "CTAGGCCACATGCAACTACGAAAAGGGCCCAATATTGTAGGTCCATGCGGACTATTACAA",
                    "CCCTTCGCCGATGCCGTAAAACTTTTCACTAAAGAACCCCTGAAACCCGCAACATCTACC",
                    "ACCATCCTCTATGTCGTCGCACCTGCTCTAGCCTTCTTCATTGCCCTCCTCCTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "macaca fuscata") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58022516.50900526!2d101.21052409245053!3d27.42522556818538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sus!4v1616272829661!5m2!1sen!2sus",
                "commonName": "Japanese Macaque",
                "imageUrl": "https://live.staticflickr.com/65535/51069999686_16c604df78_w.jpg",
                "dnaSequences": [
                    "CTTATAATCATACCCACATTAGCCGCCATAGCATTCCTCACACTCGTTGAACGAAAACTA",
                    "CTAGGCCACATACAACTACGAAAAGGGCCCAATATCGTAGGTCCATGTGGACTACTACAA",
                    "CCCTTCGCTGATGCCGTAAAACTTTTCACTAAAGAACCCCTAAAACCCGCAACATCTACC",
                    "ACCACCCTCTACATTGTCGCACCTGCCCTAGCCTTCTTCATTGCCCTCCTCCTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "hylobates lar") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15929597.781096408!2d92.4392433003077!3d12.903737522391303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sus!4v1616272754957!5m2!1sen!2sus",
                "commonName": "Lar Gibbon",
                "imageUrl": "https://live.staticflickr.com/65535/51069999766_a55acaffef_w.jpg",
                "dnaSequences": [
                    "CTCCTCATCCTACCCACCCTAATCGCCATAGCATTCCTAATGTTAACCGAACGAAAAATC",
                    "CTAGGCTACACACAACTACGCAAAGGCCCCAACATCGTAGGCCCCTATGGCCTACTACAG",
                    "CCTTTCGCCGACGCAATAAAGCTCTTCACCAAAGAACCCCTAAAACCATCTACATCAACC",
                    "ACCGCCCTCTATATCATCGCCCCAACCTTAGCCCTTACCATTGCCCTCCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "pan troglodytes") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8170117.61340418!2d6.973386580735676!3d-0.9098795638486569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b8a5438f3ed%3A0x7b0cc30e36786b15!2sGabon!5e0!3m2!1sen!2sus!4v1616272483131!5m2!1sen!2sus",
                "commonName": "Central Chimpanzee",
                "imageUrl": "https://live.staticflickr.com/65535/51070097462_a6aa6c7381_w.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATCCTAATCGCAATAGCATTCCTAATGCTAACTGAACGAAAAATT",
                    "CTAGGCTACATACAACTACGCAAAGGCCCCAACATTGTAGGCCCCTACGGGCTATTACAG",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACTAAAGAACCCTTAAAACCTTCCACTTCAACC",
                    "ATTACCCTCTACATCACCGCCCCAACCTTAGCCCTCACCATTGCCCTCTTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "homo sapiens") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16302815.261474224!2d12.679235704424523!3d-3.9834587310897196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sDemocratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2sus!4v1616273853833!5m2!1sen!2sus",
                "commonName": "Human",
                "imageUrl": "https://live.staticflickr.com/65535/51000817080_6f02b4c64e_w.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "danaus plexippus") {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15010258.159497743!2d-111.64977347739115!3d23.29347830003289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2sMexico!5e0!3m2!1sen!2sus!4v1615571346255!5m2!1sen!2sus",
                "commonName": "Monarch Butterfly",
                "imageUrl": "https://live.staticflickr.com/65535/51029568241_953358e984_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Danaus Chrysippus".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16302815.261474224!2d12.679235704424523!3d-3.9834587310897196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sDemocratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2sus!4v1615571260436!5m2!1sen!2sus",
                "commonName": "Plain Tiger",
                "imageUrl": "https://live.staticflickr.com/65535/51029667217_26fb0bf5e0_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Papilio Machaon".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5662666.096465213!2d-2.4365077847238608!3d46.13135416288309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sen!2sus!4v1615571120990!5m2!1sen!2sus",
                "commonName": "Common Yellow Swallowtail",
                "imageUrl": "https://live.staticflickr.com/65535/51029551086_6b94dff911_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Parnassius Apollo".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22873277.69574422!2d35.494409112742076!3d58.17186427507337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x453c569a896724fb%3A0x1409fdf86611f613!2sRussia!5e0!3m2!1sen!2sus!4v1615570997888!5m2!1sen!2sus",
                "commonName": "Mountain Apollo",
                "imageUrl": "https://live.staticflickr.com/65535/51028825448_910b926cb3_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Plebejus Argus".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5132299.3990673795!2d5.967878662437957!3d51.08990479102128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2sus!4v1615570532653!5m2!1sen!2sus",
                "commonName": "Silver-Studded Blue",
                "imageUrl": "https://live.staticflickr.com/65535/51029666677_6cf41e7fbc_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Lycaena Phlaeas".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26371661.85956456!2d-113.72360706725829!3d36.21040627051876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1615570696301!5m2!1sen!2sus",
                "commonName": "Small Copper",
                "imageUrl": "https://live.staticflickr.com/65535/51029568196_28ec9e279c_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Struthio Camelus".toLowerCase()) {
        res.status(200).json(
            {
                "commonName": "Common Ostrich",
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29616030.892363567!2d115.17403830285546!3d-25.025990989018837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sus!4v1615954907900!5m2!1sen!2sus",
                "imageUrl": "https://live.staticflickr.com/65535/51045182892_1d6ba03db0_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Apteryx Owenii".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25262597.98053423!2d157.30768393692472!3d-39.38310407330998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2c200e17779687%3A0xb1d618e2756a4733!2sNew%20Zealand!5e0!3m2!1sen!2sus!4v1615955185713!5m2!1sen!2sus",
                "commonName": "Little Spotted Kiwi",
                "imageUrl": "https://live.staticflickr.com/65535/51045091221_d7c72c2b9e_m.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Eudromia Elegans".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8153360.940542337!2d-69.4467385941157!3d-3.7811683072860403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92183f5c8b1d6ed1%3A0x176d6af66b3c2efa!2sState%20of%20Amazonas%2C%20Brazil!5e0!3m2!1sen!2sus!4v1615955361837!5m2!1sen!2sus",
                "commonName": "Tinamou",
                "imageUrl": "https://live.staticflickr.com/65535/51044360413_9032afe638_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Meleagris Gallopavo".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "commonName": "Wild Turkey",
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26371661.85956456!2d-113.72360706725827!3d36.21040627051876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1615955514124!5m2!1sen!2sus",
                "imageUrl": "https://live.staticflickr.com/65535/51044360118_d5d4ee6810_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Gallus gallus".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "commonName": "Domestic Chicken",
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930954.885276373!2d92.44569971299397!3d12.882413934175563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sus!4v1615956193793!5m2!1sen!2sus",
                "imageUrl": "https://live.staticflickr.com/65535/51045091026_2d8333f3fb_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Cygnus Olor".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "commonName": "Mute Swan",
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9555272.90973393!2d-13.43060241087692!3d54.218492361514244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sus!4v1615956359394!5m2!1sen!2sus",
                "imageUrl": "https://live.staticflickr.com/65535/51044387138_f8ca47f6d0_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Anas Platyrhynchos".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "commonName": "Mallard Duck",
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26371661.85956456!2d-113.72360706725829!3d36.21040627051876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1615956624384!5m2!1sen!2sus",
                "imageUrl": "https://live.staticflickr.com/65535/51045090911_8c1195848b_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Ara Macao".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "commonName": "Scarlet Macaw",
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8153360.940542337!2d-69.44673859411569!3d-3.7811683072860403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92183f5c8b1d6ed1%3A0x176d6af66b3c2efa!2sState%20of%20Amazonas%2C%20Brazil!5e0!3m2!1sen!2sus!4v1615956787234!5m2!1sen!2sus",
                "imageUrl": "https://live.staticflickr.com/65535/51045091186_8f919c6056_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Aratinga Solstitialis".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "commonName": "Sun Parakeet",
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8154895.39906936!2d-56.980390292763246!3d-3.61433557904327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9288f999ac2c0997%3A0x315ec83ee755f30a!2sState%20of%20Par%C3%A1%2C%20Brazil!5e0!3m2!1sen!2sus!4v1615957351494!5m2!1sen!2sus",
                "imageUrl": "https://live.staticflickr.com/65535/51045091121_12740fcdf9_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Phoenicopterus Roseus".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "commonName": "Greater Flamingo",
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27324299.300519112!2d9.142170240058467!3d-33.279952742205175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth%20Africa!5e0!3m2!1sen!2sus!4v1615957720021!5m2!1sen!2sus",
                "imageUrl": "https://live.staticflickr.com/65535/51044360243_54670c657b_m.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Ciconia Ciconia".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "commonName": "White Stork",
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7561063.287614376!2d20.190853885619322!3d-22.280814284673575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ea44321d1452211%3A0xf1647c2a8715af7b!2sBotswana!5e0!3m2!1sen!2sus!4v1615957866747!5m2!1sen!2sus",
                "imageUrl": "https://live.staticflickr.com/65535/51044360448_b989e5350b_m.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else if (speciesName.toString().toLowerCase() === "Pavo Cristatus".toLowerCase()) {
        res.status(200).json(
            {
                "scientificName": speciesName,
                "commonName": "Peacock",
                "mapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30711243.17762776!2d64.4398422293091!3d20.011408266548177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sus!4v1615956122590!5m2!1sen!2sus",
                "imageUrl": "https://live.staticflickr.com/65535/51044360313_87fa0b4284_n.jpg",
                "dnaSequences": [
                    "CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
                    "CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
                    "CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
                    "ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
                ]
            }
        )
    } else {
        return res.status(404).json({"error": speciesName + ' does not have a response. Please create one in /front-end/test/testServe.js'});
    }
})
app.post('/dnacomparisons', (req, res) => {
    const comparison = req.query.comp;
    if (comparison === "gorilla_gorilla_homo_sapiens_hylobates_lar_lemur_catta_macaca_fascicularis_macaca_fuscata_macaca_mulatta_macaca_sylvanus_pan_troglodytes_pongo_pygmaeus_saimiri_sciureus_tarsius_syrichta") {
        res.status(200).json({
            "key": comparison,
            "compStrings": [
                " *  * *   *  * *   *    ** ** ** **  * *   *    ** ** *** * ",
                " * **  * *  ***** ** ** ** ** **     * ** **    **  *  * ** ",
                "**  * ** ** **  **** ** ** *  ***** **  *    **    ** **  * ",
                "      ** **        * **     * **  *     *  * **  *   *****  "
            ]
        })
    } else if (comparison === "hylobates_lar_lemur_catta_macaca_fascicularis_macaca_fuscata_macaca_mulatta_macaca_sylvanus_pongo_pygmaeus_saimiri_sciureus_tarsius_syrichta") {
        res.status(200).json({
            "key": comparison,
            "compStrings": [
                " *  * *   *  * *   *    ** ** ** **  * *   *    ** ** *** * ",
                " * **  * *  ***** ** ** ** ** **     * ** **    **  *  * ** ",
                "**  * ** ** **  **** ** ** *  ***** **  *    **    ** **  * ",
                " *    ** **     *  * **     * **  *     *  * **  *   *****  "
            ]
        })
    } else if (comparison === "hylobates_lar_lemur_catta_macaca_fascicularis_macaca_fuscata_macaca_mulatta_macaca_sylvanus_saimiri_sciureus_tarsius_syrichta") {
        res.status(200).json({
            "key": comparison,
            "compStrings": [
                " *  * **  *  * *   *    ** ** ** **  * *   *    ** ** *** * ",
                " * **  * *  ***** ** ** ** ** **     * ** **    **  *  * ** ",
                "**  * ** ** **  **** ** ** *  ***** **  *    **    ** **  * ",
                " *    ** **     * ** **     * **  *     *  * **  *   *****  "
            ]
        })
    } else if (comparison === "lemur_catta_macaca_fascicularis_macaca_fuscata_macaca_mulatta_macaca_sylvanus_saimiri_sciureus_tarsius_syrichta") {
        res.status(200).json({
            "key": comparison,
            "compStrings": [
                " *  ****  *  * *   *    ** ** ** **  * *** *    ** ** *** * ",
                " * **  * ** ***** ** ** ** ** **     * ** **    **  *  * ***",
                "**  * ** ** **  ******* ** *  ***** **  *    **    ** **  * ",
                " *    ** **     * ** **    ** **  *     *  * **  *   *****  "
            ]
        })
    } else if (comparison === "macaca_fascicularis_macaca_fuscata_macaca_mulatta_macaca_sylvanus") {
        res.status(200).json({
            "key": comparison,
            "compStrings": [
                "*** **** *** * ******** *********** *********** ** ****** **",
                "** **  **** ************** *****  * ***** ***   ****** *****",
                "** ***** ** **  ******* ***** ********* * ****** ******* ***",
                "**   *** **  *  ******* ** *************** **** ************"
            ]
        })
    } else if (comparison === "lemur_catta_saimiri_sciureus_tarsius_syrichta") {
        res.status(200).json({
            "key": comparison,
            "compStrings": [
                " * *****  **** *   *  * ** ** ** *** * *** *  * ***** *** * ",
                " **** ** ******** ** ** ********     * ** **  * **  *  * ***",
                "**  **** ** *********** ** *  ***** ** ** *  **    ** **  * ",
                " *    ** **    ***** ** *  ** ** **  *  * ** **  *   *****  "
            ]
        })
    } else if (comparison === "macaca_fascicularis_macaca_fuscata_macaca_mulatta") {
        res.status(200).json({
            "key": comparison,
            "compStrings": [
                "*********************** *********** *********** ********* **",
                "****** **** ********************  * **********  ****** *****",
                "** ***** ** ** ************************** ****** ***********",
                "**** *** **  *  ******* ** *************** **** ************"
            ]
        })
    } else if (comparison === "lemur_catta_tarsius_syrichta") {
        res.status(200).json({
            "key": comparison,
            "compStrings": [
                " * ***** ***** *** * ** ** ***** *** * ***** ** ***** *** * ",
                " **** ** ******** ***** ********* *  * ** **  * *** *  *****",
                "******** ** ************** ** ******** ** *  ** ** ** **  * ",
                "**   *** **** ********* ** ** ****** ** * ** **  * * ****** "
            ]
        })
    } else if (comparison === "macaca_fuscata_macaca_mulatta") {
        res.status(200).json({
            "key": comparison,
            "compStrings": [
                "*********************************** ********************* **",
                "*********** *********************** *********** ****** *****",
                "******** ******************************** ******************",
                "**** ******  * *********** *********************************"
            ]
        })
    } else if (comparison === "homo_sapiens_pan_troglodytes") {
        res.status(200).json({
            "key": comparison,
            "compStrings": [
                "***************** *********** ************** ** ************",
                "******** ************************ ******************** **** ",
                "***************************** ***** *** *******  **** ** ***",
                "** ******************** ******** ******** ** **  ***********"
            ]
        })
    } else {
        return res.status(404).json({"error": comparison + ' does not have a response. Please create one in /front-end/test/testServe.js'});
    }

})

app.listen(port, () => {
    console.log(`Test server listening at http://localhost:${port}`)
})