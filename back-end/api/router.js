const Router = require('express')
const Species = require('../database/src/models/species')
const Tree = require('../database/src/models/tree')
const Comparison = require('../database/src/models/comparison')

const router = Router()

router.get('/species', async (req, res) => {
	const speciesName = req.body.scientificName
	const species = await Species.findByPk(speciesName)
	const resBody = species.toJSON()
	res.send(resBody)
})

router.get('/tree', async (req, res) => {
	const treeName = req.body.treeName
	const tree = await Tree.findByPk(treeName)
	const resBody = tree.toJSON()
	res.send(resBody)
})

router.get('/comparison', async (req, res) => {
	const compKey = req.body.compKey
	const comparison = await Comparison.findByPk(compKey)
	const resBody = comparison.toJSON()
	res.send(resBody)
})

module.exports = router