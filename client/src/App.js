import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import LeaveApplicationPage from "./Dashboard/LeaveApplicationPage";
import AttendanceRecordPage from "./Dashboard/AttendanceRecordPage";
import Navbar from "./Navbar/Navbar"; // Import the Navbar
import LoginPage from "./Login/Login"; // Import the LoginPage

function App() {
  // Function to check if the user is logged in
  const isAuthenticated = () => {
    return localStorage.getItem("isAuthenticated") === "true";
  };

  return (
    <Router>
      <div className="App">
        <ConditionalNavbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated()}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated()}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/apply-for-leave"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated()}>
                <LeaveApplicationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/attendance-record-page"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated()}>
                <AttendanceRecordPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function ConditionalNavbar() {
  const location = useLocation();

  // Do not render Navbar on login page
  if (location.pathname === "/login") {
    return null;
  }

  return <Navbar pageName="Dashboard" />;
}

function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default App;
