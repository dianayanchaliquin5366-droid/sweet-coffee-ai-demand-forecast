const express = require("express");

const router = express.Router();


// Datos actuales del Dashboard
router.get("/", (req, res) => {

    res.json({

        ventasDia: "$1,250",

        ingresos: "$8,540",

        pedidos: 186,

        precisionIA: "96%",

        productoTop: "Latte",

        prediccion: "215 tazas",

        historial: [
            {
                fecha: "Lunes",
                ventas: 180
            },
            {
                fecha: "Martes",
                ventas: 195
            },
            {
                fecha: "Miércoles",
                ventas: 210
            },
            {
                fecha: "Jueves",
                ventas: 220
            },
            {
                fecha: "Viernes",
                ventas: 240
            }
        ]

    });

});


module.exports = router;