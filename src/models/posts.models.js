const {DataTypes} =require('sequelize')

const db = require('../utils/database')

const Posts = db.define('posts', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,  //? not null
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,  //? not null
    
  },
  isPublished: {
    type: DataTypes.BOOLEAN,
   defaultValue: true
  },
})


module.exports = Posts