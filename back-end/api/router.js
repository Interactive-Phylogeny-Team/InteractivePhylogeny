const Router = require('express')

const router = Router()

router.get('/species', (req, res) => {
	res.send(`Species has name ${req.body}`)
})

module.exports = router