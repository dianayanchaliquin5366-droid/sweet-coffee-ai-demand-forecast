import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Forecast from "./pages/Forecast";
import Finance from "./pages/Finance";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      {/* Landing sin Navbar ni Sidebar */}
      <Route path="/" element={<Landing />} />

      {/* Páginas internas con Layout */}
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="/forecast"
        element={
          <Layout>
            <Forecast />
          </Layout>
        }
      />

      <Route
        path="/finance"
        element={
          <Layout>
            <Finance />
          </Layout>
        }
      />

      <Route
        path="/settings"
        element={
          <Layout>
            <Settings />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;