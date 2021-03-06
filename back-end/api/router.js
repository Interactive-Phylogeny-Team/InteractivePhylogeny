const Router = require('express')

const router = Router()

router.get('/species', (req, res) => {
	const speciesName = req.body.speciesName
	const resBody = {response: `Species has name ${speciesName}`}
	res.send(resBody)
})

module.exports = router