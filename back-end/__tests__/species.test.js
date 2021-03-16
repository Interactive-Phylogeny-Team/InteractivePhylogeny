const Species = require('../database/src/models/species')

test('Test Species Model', async () => {
	const primaryKey =  'gorilla gorilla'

	let species1 = await Species.create({
		scientificName: primaryKey,
		commonName: 'gorilla',
		longitude: 14.4,
		latitude: 15.6,
		imageUrl: 'http:://species/somewhere.html',
		dnaSequence: 'ACTGTTCA',
		mapLink: 'http:://species/map.link.net'
	})

	let species2 = await Species.findByPk(primaryKey)
	species1 = JSON.stringify(species1.toJSON())
	species2 = JSON.stringify(species2.toJSON())
	expect(species1).toBe(species2)
})