/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const UserRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <span className="loading loading-ring loading-lg h-screen text-center"></span>
    );
  }
  if (user) {
    return children;
  } else {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Please! Login First",
      showConfirmButton: false,
      timer: 1500,
    });
    return <Navigate to="/register"></Navigate>;
  }
};

export default UserRoutes;
