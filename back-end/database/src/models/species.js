const {DataTypes} = require('sequelize')
const {sequelize} = require('../index')

const Species = sequelize.define(modelName='Species', attributes={
	name: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false
	},
	longitude: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	latitude: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	dnaSequence: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	}
})

module.exports = Species
