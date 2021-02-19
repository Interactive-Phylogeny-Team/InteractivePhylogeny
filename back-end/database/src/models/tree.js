const {DataTypes} = require('sequelize')
const {sequelize} = require('../index')

const Tree = sequelize.define(modelName='Tree', attributes={
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	tree: {
		type: DataTypes.BLOB,
		allowNull: false,
		unique: true
	}
})

module.exports = Tree