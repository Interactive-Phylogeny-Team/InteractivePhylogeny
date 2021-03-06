const Router = require('express')
const Species = require('../database/src/models/species')

const router = Router()

router.get('/species', async (req, res) => {
	const speciesName = req.body.scientificName
	const species = await Species.findByPk(speciesName)
	const resBody = species.toJSON()
	res.send(resBody)
})

module.exports = router