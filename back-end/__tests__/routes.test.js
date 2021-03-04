const request = require('supertest')
const app = require('../index.js')

test('Test Endpoints', async () => {
	const speciesName = 'crocadile'
	const res = await request(app)
		.get('/species')
		.send(speciesName)
	expect(res.body).toBe(`Species has name ${speciesName}`)
})