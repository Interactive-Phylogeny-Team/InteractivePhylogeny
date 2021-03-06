const Species = require('../database/src/models/species')

test('Test Species Model', async () => {
	const primaryKey =  'gorrila gorilla'

	let species1 = await Species.create({
		scientificName: primaryKey,
		commonName: 'gorilla',
		longitude: 14.4,
		latitude: 15.6,
		imageUrl: 'http:://somewhere.html',
		dnaSequence: 'ACTGTTCA'
	})

	let species2 = await Species.findByPk(primaryKey)
	species1 = JSON.stringify(species1.toJSON())
	species2 = JSON.stringify(species2.toJSON())
	expect(species1.toString()).toBe(species2.toString())
})