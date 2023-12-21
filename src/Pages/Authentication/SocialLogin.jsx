import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import Swal from 'sweetalert2';
import { AuthContext } from "../../Providers/AuthProvider";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const handleGoogleLogin = async () => {
    try {
      await googleLogin().then(async () => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged In Successful...",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    } catch {
      toast.error("Login Failed, Try Again!");
    }
  };
  return (
    <div className="flex justify-center items-center gap-5">
      <button className="bg-secondary text-white p-2 rounded-md">
        <FaTwitter size={20} />
      </button>

      <button
        onClick={handleGoogleLogin}
        className="bg-secondary text-white p-2 rounded-md"
      >
        <FaGoogle size={20} />
      </button>

      <button className="bg-secondary text-white p-2 rounded-md">
        <FaGithub size={20} />
      </button>
    </div>
  );
};

export default SocialLogin;
