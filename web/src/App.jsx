import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Dashboard from "./pages/Dashboard";
import Forecast from "./pages/Forecast";
import Finance from "./pages/Finance";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

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