const mongoose = require ('mongoose')

//Codigo neesario para conectarse a la BD
mongoose.connect('mongodb://127.0.0.1:27017/TAP', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})

