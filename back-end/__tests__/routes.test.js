const request = require('supertest')
const app = require('../api/app')

test('Test Endpoints', async () => {
	const data = {
		speciesName: 'bonobo'
	}

	const res = await request(app)
		.get('/species')
		.send(data)

	const response = res.body.response
	expect(response).toBe(`Species has name ${data.speciesName}`)
})
