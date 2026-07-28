import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


function ChartCard() {

  const data = [
    {
      dia: "Lunes",
      ventas: 180,
    },
    {
      dia: "Martes",
      ventas: 195,
    },
    {
      dia: "Miércoles",
      ventas: 210,
    },
    {
      dia: "Jueves",
      ventas: 220,
    },
    {
      dia: "Viernes",
      ventas: 240,
    },
  ];


  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "20px",
        marginTop: "30px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >

      <h2
        style={{
          color: "#4E342E",
          marginTop: 0,
        }}
      >
        📈 Pronóstico de Demanda
      </h2>


      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="dia" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="ventas"
            stroke="#6D4C41"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>


    </div>
  );
}


export default ChartCard;