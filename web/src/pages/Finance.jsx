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
  Legend,
} from "recharts";

const financeData = [
  {
    mes: "Ene",
    ingresos: 8000,
    costos: 4500,
  },
  {
    mes: "Feb",
    ingresos: 9500,
    costos: 5200,
  },
  {
    mes: "Mar",
    ingresos: 11000,
    costos: 6000,
  },
  {
    mes: "Abr",
    ingresos: 12500,
    costos: 6500,
  },
  {
    mes: "May",
    ingresos: 14000,
    costos: 7200,
  },
];

function Finance() {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Finanzas
      </Typography>


      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Análisis financiero del negocio basado en proyecciones de demanda.
      </Typography>


      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          mb: 3,
        }}
      >

        <CardContent>

          <Typography variant="h6">
            💰 Ingresos estimados
          </Typography>


          <Typography
            variant="h3"
            fontWeight="bold"
          >
            $12,500
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
            📈 Margen esperado
          </Typography>


          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              color:"#2E7D32"
            }}
          >
            35%
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
      📊 Evolución financiera
    </Typography>


    <ResponsiveContainer
      width="100%"
      height={350}
    >

      <LineChart data={financeData}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="mes" />

        <YAxis />

        <Tooltip />

        <Legend />


        <Line
          type="monotone"
          dataKey="ingresos"
          name="Ingresos"
          stroke="#2E7D32"
          strokeWidth={3}
        />


        <Line
          type="monotone"
          dataKey="costos"
          name="Costos"
          stroke="#D84315"
          strokeWidth={3}
        />

      </LineChart>

    </ResponsiveContainer>


  </CardContent>
</Card>

    </>
  );
}


export default Finance;