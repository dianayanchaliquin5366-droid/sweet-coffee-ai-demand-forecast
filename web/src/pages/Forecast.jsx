import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const forecastData = [
  {
    dia: "Lun",
    prediccion: 220,
  },
  {
    dia: "Mar",
    prediccion: 240,
  },
  {
    dia: "Mié",
    prediccion: 260,
  },
  {
    dia: "Jue",
    prediccion: 280,
  },
  {
    dia: "Vie",
    prediccion: 310,
  },
  {
    dia: "Sáb",
    prediccion: 350,
  },
  {
    dia: "Dom",
    prediccion: 300,
  },
];

function Forecast() {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Forecast IA
      </Typography>


      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Predicción inteligente de demanda utilizando modelos de inteligencia artificial.
      </Typography>


      <Card
        sx={{
          mb: 3,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent>

          <Typography variant="h6">
            🤖 Modelo utilizado
          </Typography>

          <Typography variant="h4" fontWeight="bold">
            Random Forest
          </Typography>

        </CardContent>
      </Card>


      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent>

          <Typography variant="h6">
            Precisión del modelo
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              color:"#2E7D32"
            }}
          >
            96.4%
          </Typography>

        </CardContent>
      </Card>
 <Card
        sx={{
          mt: 3,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent>

          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              mb: 3,
            }}
          >
            📈 Predicción futura de demanda
          </Typography>


          <ResponsiveContainer
            width="100%"
            height={350}
          >

            <LineChart data={forecastData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="dia" />

              <YAxis />

              <Tooltip />


              <Line
                type="monotone"
                dataKey="prediccion"
                stroke="#6D4C41"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>


        </CardContent>
      </Card>
    </>
  );
}

export default Forecast;