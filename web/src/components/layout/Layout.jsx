import Box from "@mui/material/Box";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function Layout({ children }) {
  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          display: "flex",
        }}
      >
        <Sidebar />

        <Box
          component="main"
          sx={{
            flex: 1,
            p: 3,
            backgroundColor: "background.default",
            minHeight: "100vh",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;