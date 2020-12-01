const express = require('express')
const router = new express.Router()
const Venta = require('../models/venta')

// Recupero determinado cliente por ID
router.get('/clients/:dni/:date', async (req, res) => {
    const { dni, date } = req.params

    try {
        const venta = await Venta.findOne({ dni, date })
        const comission = venta.sales > 100000 ? 7 : 4;
        const montoAPagar = (venta.sales * comission)/100;

        if (!venta) {
            return res.status(404).send('Venta no encontrada')
        }

        res.status(200).send({ venta, comission, montoAPagar })
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

module.exports = router