const request = require('supertest')
const app = require('../api/app')

test('Test Get Comparison Endpoint', async () => {
	const primaryKey = 'gorilla_gorilla_homo_sapiens_hylobates_lar_lemur_catta_macaca_fascicularis_macaca_fuscata_macaca_mulatta_macaca_sylvanus_pan_troglodytes_pongo_pygmaeus_saimiri_sciureus_tarsius_syrichta'

	let comparison = {
		"key": primaryKey,
		"compStrings": [
			" *  * *   *  * *   *    ** ** ** **  * *   *    ** ** *** * ",
			" * **  * *  ***** ** ** ** ** **     * ** **    **  *  * ** ",
			"**  * ** ** **  **** ** ** *  ***** **  *    **    ** **  * ",
			"      ** **        * **     * **  *     *  * **  *   *****  "
		]
	}

	const res = await request(app)
		.get(`/comparison?compKey=${primaryKey}`)

	comparison = JSON.stringify(comparison)
	const resBody = JSON.stringify(res.body)
	expect(resBody).toBe(comparison)
})