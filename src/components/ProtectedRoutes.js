// // import { useContext } from "react";
// // import { Navigate } from "react-router-dom";
// // import { AuthContext } from "../context/AuthContext";

// // export default function ProtectedRoute({ children }) {
// //   const { user } = useContext(AuthContext);
// //   if (!user) return <Navigate to="/login" />;
// //   return children;
// // }
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/" />;
// };

// export default ProtectedRoute;
import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "../utils/auth";

// allowedRoles = ["Admin"] या ["Base Commander", "Logistics Officer"]
const ProtectedRoute = ({ allowedRoles, children }) => {
  const { token, role } = getAuth();

  if (!token) {
    // User logged out है → Login page पर redirect
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(role)) {
    // Role mismatch → Unauthorized / Dashboard redirect
    return <Navigate to="/" />;
  }

  // सब सही है → children render करो
  return children;
};

export default ProtectedRoute;
