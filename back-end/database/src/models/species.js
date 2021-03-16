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
		type: Sequelize.CITEXT,
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
