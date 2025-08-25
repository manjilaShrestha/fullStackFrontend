// import {Navigate} from 'react-router-dom';
// import Cookies from 'js-cookie';

// export default function ProtectedRoute({children, allowedRoles}) {
//     const userCookie = Cookies.get('user');
//     if (!userCookie) return <Navigate to="/" replace />;

//     try {
//         const user = JSON.parse(userCookie);
//         if (allowedRoles.includes(user.role)) {
//             return children;
//         } else {
//             return <Navigate to="/" replace />;
//         }
//     }catch (error) {
//         console.error("Invalid cookie",error);
//         return <Navigate to="/login" replace />;
//     }
// }


import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("employee")); // saved in Login

  // Not logged in
  if (!token || !user) {
    return <Navigate to="/" replace />;
  }

  // Role not allowed
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
