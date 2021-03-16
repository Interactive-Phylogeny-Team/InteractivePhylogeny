const request = require('supertest')
const app = require('../api/app')
const Species = require('../database/src/models/species')

test('Test Endpoints', async () => {
	const primaryKey =  'Pan paniscus'

	let species = await Species.create({
		scientificName: primaryKey,
		commonName: 'bonobo',
		longitude: 11.5,
		latitude: 16.5,
		imageUrl: 'http:://routes/anywhere.html',
		dnaSequence: 'ACGGTACA',
		mapLink: 'http:://routes/map.link.com'
	})

	reqBody = {
		scientificName: primaryKey
	}

	const res = await request(app)
		.get('/species')
		.send(reqBody)

	species = JSON.stringify(species)
	const resBody = JSON.stringify(res.body)
	expect(resBody).toBe(species)
})
