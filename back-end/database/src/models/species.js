const {DataTypes} = require('sequelize')
const sequelize = require('../index.js')

const Species = sequelize.define(modelName='Species', attributes={
	scientificName: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
		primaryKey: true
	},
	commonName: {
		type: DataTypes.STRING
	},
	accessionNumber: {
		type: DataTypes.STRING,
		allowNull: false
	},
	imageUrl: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	dnaSequences: {
		type: DataTypes.ARRAY(DataTypes.CITEXT),
		allowNull: false
	},
	mapLink: {
		type: DataTypes.STRING(500),
		allowNull: false
	}
}, {
	timestamps: false
})

module.exports = Species
