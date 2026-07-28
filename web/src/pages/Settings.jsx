import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


function Settings() {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Configuración
      </Typography>


      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Parámetros generales del sistema de predicción.
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
            🤖 Modelo seleccionado
          </Typography>


          <Typography
            variant="h4"
            fontWeight="bold"
          >
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
            🔄 Última actualización
          </Typography>


          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Datos actualizados hoy
          </Typography>

        </CardContent>

      </Card>

    </>
  );
}


export default Settings;