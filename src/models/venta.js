const mongoose = require('mongoose')
const validator = require('validator')

const Venta = mongoose.model('Venta', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    dni: {
        type: Number,
        required: true,
        trim: true,
        minLength: 8,
        validate(value) {
            if(value < 8) {
                throw new Error('DNI Incorrecto')
            }
        }

    },
    date: {
        type: Number,
        required: true
    },
    sales: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('El total de la venta debe ser > 0')
            }
        }
    }
})


module.exports = Venta