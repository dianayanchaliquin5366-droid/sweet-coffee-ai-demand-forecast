import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function KPICard({ titulo, valor, icono, color }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        height: "100%",
        boxShadow: 3,
      }}
    >
      <CardContent>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {titulo}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                mt: 1,
              }}
            >
              {valor}
            </Typography>
          </Box>


          <Box
  sx={{
    fontSize: 40,
    color: color,
    display: "flex",
    alignItems: "center",
  }}
>
  {React.cloneElement(icono, {
    sx: {
      fontSize: 40,
      color: color,
    },
  })}
</Box>

        </Box>

      </CardContent>
    </Card>
  );
}

export default KPICard;