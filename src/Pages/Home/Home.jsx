import Lottie from "lottie-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import TaskAnime from "../../assets/TaskAnime.json";
import logo from "../../assets/logo.png";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="relative w-full h-screen bg-primary/10">
      <div className="w-full h-full flex justify-center items-center">
        <Lottie animationData={TaskAnime} loop={true} />
      </div>

      {/* ----- Explore button ----- */}
      <div className="absolute top-2 right-5 md:right-10 bg-secondary text-white font-semibold text-sm md:text-lg rounded-md px-3 py-1">
        <NavLink to={user ? "/dashboard" : "/register"}>Explore</NavLink>
      </div>

      {/* ----- Logo ----- */}
      <div className="absolute top-3 left-5 md:left-10 w-28 md:w-36">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Home;
