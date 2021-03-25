const {DataTypes} = require('sequelize')
const sequelize = require('../index')

const Comparison = sequelize.define('Comparison', {
	key: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
		primaryKey: true
	},
	compStrings: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: false
	}
}, {
	timestamps: false
})

module.exports = Comparison