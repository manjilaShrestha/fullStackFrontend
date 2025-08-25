// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import AdminDashboard from "./pages/Admin/AdminDashboard";
// import ProtectedRoute from "./utils/ProtectedRoute.jsx";

// // function App() {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<Login />} />
// //       <Route path="/admin-dashboard" element={<AdminDashboard />} />
// //     </Routes>
// //   );
// // }

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />

//       <Route path = "/admin-dashboard" element={
//         <ProtectedRoute allowedRoles={['admin']}>
//           <AdminDashboard />
//         </ProtectedRoute>
//       }/>
//       <Route path = "/employee-dashboard" element={
//         <ProtectedRoute allowedRoles={['employee']}>
//           <Dashboard />
//         </ProtectedRoute>

//       }/>
//       </Routes>
//   );
// }

// export default App;



import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"; // Employee Dashboard
import AdminDashboard from "./pages/Admin/AdminDashboard"; // Admin Dashboard
import ProtectedRoute from "./utils/ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* Admin Dashboard (only for admins) */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Employee Dashboard (only for employees) */}
      <Route
        path="/employee-dashboard"
        element={
          <ProtectedRoute allowedRoles={["employee"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
