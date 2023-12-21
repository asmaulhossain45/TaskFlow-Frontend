import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const [formVisible, setFormVisible] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4">
      <div className="max-w-80 w-full mx-auto bg-primary space-y-5 rounded-md overflow-hidden pt-8">
        {formVisible ? <LoginForm /> : <RegisterForm />}

        <button
          onClick={() => setFormVisible(!formVisible)}
          className="w-full text-lg text-white font-bold uppercase py-3 bg-secondary rounded-ss-full rounded-se-full shadow-error"
        >
          {formVisible ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Register;
