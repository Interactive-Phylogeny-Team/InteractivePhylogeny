const request = require('supertest')
const app = require('../api/app')

test('Test Get Species Endpoint', async () => {
	const primaryKey = 'Homo Sapiens'

	let species = {
		scientificName: primaryKey,
		commonName: "Human",
		accessionNumber: "MW389270.1",
		mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16302815.261474224!2d12.679235704424523!3d-3.9834587310897196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sDemocratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2sus!4v1616273853833!5m2!1sen!2sus",
		imageUrl: "https://live.staticflickr.com/65535/51000817080_6f02b4c64e_w.jpg",
		dnaSequences: [
			"CTCCTCATTGTACCCATTCTAATCGCAATGGCATTCCTAATGCTTACCGAACGAAAAATT",
			"CTAGGCTATATACAACTACGCAAAGGCCCCAACGTTGTAGGCCCCTACGGGCTACTACAA",
			"CCCTTCGCTGACGCCATAAAACTCTTCACCAAAGAGCCCCTAAAACCCGCCACATCTACC",
			"ATCACCCTCTACATCACCGCCCCGACCTTAGCTCTCACCATCGCTCTTCTACTATGAACC"
		]
	}

	const res = await request(app)
		.get(`/species?scientificName=${primaryKey}`)

	const resBody = res.body
	expect(resBody.scientificName).toBe(species.scientificName)
	expect(resBody.commonName).toBe(species.commonName)
	expect(resBody.mapLink).toBe(species.mapLink)
	expect(resBody.imageUrl).toBe(species.imageUrl)
	expect(resBody.dnaSequences[0]).toBe(species.dnaSequences[0])
	expect(resBody.dnaSequences[1]).toBe(species.dnaSequences[1])
	expect(resBody.dnaSequences[2]).toBe(species.dnaSequences[2])
	expect(resBody.dnaSequences[3]).toBe(species.dnaSequences[3])
})
