const express = require('express')
require('./db/mongoose')
const ventaRouter = require('./routers/venta')
const clientRouter = require('./routers/client')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(ventaRouter)
app.use(clientRouter)

app.listen(port, () => {
    console.log('el servidor esta en el puerto ' + port)
})

