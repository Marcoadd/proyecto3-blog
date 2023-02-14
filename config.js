require('dotenv').config()

const configs = {
  db: {
    develpment:{
      dialect: 'postgres',
      host: 'localhost',
      username: 'postgres' ,
      password: 'An+onio98' ,
      database: 'posts-db',
      difine: {
        timestamps: true,  //? va a utiliza por defecto los creates_at and post_at 
        underscored: true, //? Converte camelCAse en snake_case todos los nombres y atributos de mis modelos
        underscoredAll: true
      }
    },
    test: {

    },
    production: {

    }
  }
}

module.exports = configs
