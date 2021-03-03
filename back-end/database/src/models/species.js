const {DataTypes} = require('sequelize')
const {sequelize} = require('../index')

const Species = sequelize.define(modelName='Species', attributes={
	scientificName: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false
	},
	commonName: {
		type: DataTypes.STRING
	},
	longitude: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	latitude: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	imageUrl: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	dnaSequence: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	}
})

module.exports = Species
