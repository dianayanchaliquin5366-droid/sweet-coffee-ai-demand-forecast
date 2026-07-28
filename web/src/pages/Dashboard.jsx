import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import CoffeeIcon from "@mui/icons-material/Coffee";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import SmartToyIcon from "@mui/icons-material/SmartToy";

import KPICard from "../components/KPICard";
import ChartCard from "../components/ChartCard";
import { useEffect, useState } from "react";
import { getDashboardData } from "../services/dashboardService";
function Dashboard() {

const [dashboardData, setDashboardData] = useState(null);

useEffect(() => {
  getDashboardData().then((data) => {
    setDashboardData(data);
  });
}, []);

if (!dashboardData) {
  return <Typography>Cargando Dashboard...</Typography>;
}

  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Dashboard
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Bienvenido al panel de control de Sweet Coffee AI.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} lg={3}>
        <KPICard
  titulo="Ventas del día"
  valor={dashboardData.ventasDia}
  icono={<CoffeeIcon />}
  color="#6D4C41"
/>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <KPICard
  titulo="Ingresos"
  valor={dashboardData.ingresos}
  icono={<AttachMoneyIcon />}
  color="#2E7D32"
/>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <KPICard
  titulo="Pedidos"
  valor={dashboardData.pedidos}
  icono={<InventoryIcon />}
  color="#EF6C00"
/>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <KPICard
  titulo="Precisión IA"
  valor={dashboardData.precisionIA}
  icono={<SmartToyIcon />}
  color="#1565C0"
/>
        </Grid>
      </Grid>

      <ChartCard />

      <Grid container spacing={3} sx={{ mt: 2 }}>
  <Grid item xs={12} md={6}>
    <KPICard
      titulo="Producto más vendido"
      valor={dashboardData.productoTop}
      icono={<CoffeeIcon />}
      color="#8D6E63"
    />
  </Grid>

  <Grid item xs={12} md={6}>
    <KPICard
      titulo="Predicción para mañana"
      valor={dashboardData.prediccion}
      icono={<SmartToyIcon />}
      color="#3949AB"
    />
  </Grid>
</Grid>
    </>
  );
}

export default Dashboard;