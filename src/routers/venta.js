const express = require('express')
const Venta = require('../models/venta')
const router = new express.Router()


// Crear una nueva venta
router.post('/ventas', async (req, res) => {
    const { dni, date } = req.body
    const venta = await Venta.findOne({ dni, date })
    if (venta) return res.status(400).send('Ya existe una venta para ese dni en esa fecha')

    const newVenta = new Venta(req.body)

    try {
        await newVenta.save()
        res.status(201).send(newVenta)
    } catch (e) {
        res.status(400).send(e)
    }
})


//Obtengo todas las ventas 
router.get('/ventas', async (req, res) => {
    try {
        const ventas = await Venta.find({})
        res.send(ventas)
    } catch (e) {
        res.status(500).send()
    }
})

//Recupero venta por ID
router.get('/ventas/:dni', async (req, res) => {
    const dni = req.params.dni

    try {
        const venta = await Venta.findOne(dni)

        if (!venta) {
            return res.status(404).send()
        }

        res.send(venta)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
