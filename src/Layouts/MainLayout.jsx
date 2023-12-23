import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <span className="loading loading-ring loading-lg h-screen text-center"></span>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto">
      <Outlet />
    </div>
  );
};

export default MainLayout;
