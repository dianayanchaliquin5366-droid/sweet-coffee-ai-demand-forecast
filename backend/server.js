const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const forecastRoutes = require("./routes/forecastRoutes");

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/forecast", forecastRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
    res.json({
        mensaje: "Sweet Coffee AI Backend funcionando ☕"
    });
});


// Puerto del servidor
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});