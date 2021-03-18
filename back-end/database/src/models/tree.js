const {DataTypes} = require('sequelize')
const sequelize = require('../index.js')

const Tree = sequelize.define(modelName='Tree', attributes={
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		primaryKey: true
	},
	tree: {
		type: DataTypes.CITEXT,
		allowNull: false
	}
}, {
	timestamps: false
})

module.exports = Tree