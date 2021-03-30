const request = require('supertest')
const app = require('../api/app')

test('Test Get Tree Endpoint', async () => {
	const primaryKey = 'primates'

	let tree = {
		name: primaryKey,
		tree: "((((((Ring-Tailed Lemur|(Lemur Catta):0.1269661635,Philippine Tarsier|(Tarsius Syrichta):0.1357234567):0.04610918835,Guianan Squirrel Monkey|(Saimiri Sciureus):0.1511647403):0.03297051787,(Barbary Macaque|(Macaca Sylvanus):0.05569241196,(Crab-Eating Macaque|(Macaca Fascicularis):0.03537073359,(Rhesus Macaque|(Macaca Mulatta):0.02247709967,Japanese Macaque|(Macaca Fuscata):0.02050100826):0.01529664919):0.01894555241):0.06892202795):0.02220310271,Lar Gibbon|(Hylobates Lar):0.09259499609):0.009971413761,Bornean Orangutan|(Pongo Pygmaeus):0.08574594557):0.0226519797,Western Gorilla|(Gorilla Gorilla):0.05785439722,(Central Chimpanzee|(Pan Troglodytes):0.0422138907,Human|(Homo Sapiens):0.04549573734):0.009944157675);"
	}

	const res = await request(app)
		.get(`/tree?treeName=${primaryKey}`)

	tree = JSON.stringify(tree)
	const resBody = JSON.stringify(res.body)
	expect(resBody).toBe(tree)
})