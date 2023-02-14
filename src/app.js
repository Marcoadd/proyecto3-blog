//Dependencias
const express = require('express')
const postRouter = require('./posts/posts.router')
const db = require('./utils/database')

// initial config
const app = express()
app.use(express.json())

db.authenticate() //? mostrar en ocnsola de manera informativa si la peticion se hizo de forma correcta
  .then(data => {
    console.log('Las credenciales de la base de datos quedó al tiro')
  })
  .catch(err => {
    console.log(err) //! errores de autenticacion (contraseña, usuario o host)
  })




db.sync() //? sincronizar nuestra base de datos con los modelos que tenemos definidos
  .then(data => {
    console.log('La base datos se sinconizo al mero pedo')
  })
  .catch(err => {
    console.log(err) //! error con respecto a las tablas, propiedades etc
  })



app.get('./', (req, res) => {
  res.json({
    message: 'Server al tiro'
  })
})

app.use('/api/v1', postRouter)


app.listen(9000, () => {
  console.log('Server Stared at port 9000');
})

module.exports = app
