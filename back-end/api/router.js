const Router = require('express')
const Species = require('../database/src/models/species')
const Tree = require('../database/src/models/tree')
const Comparison = require('../database/src/models/comparison')

const router = Router()

router.get('/species', async (req, res) => {
	let speciesName;
	try {
		speciesName = req.query.speciesName;
		if (speciesName === undefined) return res.status(400).json({error: 'Blank request; please provide a species name'})
		const species = await Species.findByPk(speciesName)
		const resBody = species.toJSON()
		res.send(resBody)
	} catch (error) {
		return res.status(400).json({
			error: `Unable to process request for - ${speciesName}`
		})
	}
})

router.get('/tree', async (req, res) => {
	const treeName = req.body.treeName
	const tree = await Tree.findByPk(treeName)
	const resBody = tree.toJSON()
	res.send(resBody)
})

router.get('/comparison', async (req, res) => {
	let compKey;
	try {
		compKey = req.query.comp
		const comparison = await Comparison.findByPk(compKey)
		const resBody = comparison.toJSON()
		res.send(resBody)
	} catch (error) {
		return res.status(400).json({
			error: `Unable to process request for - ${compKey}`
		})
	}
})

module.exports = router