import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [isDisable, setDisable] = useState(false);
  const { createUser, updateUser, userLogOut } = useContext(AuthContext);

  const onSubmit = async (data) => {
    setDisable(true);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    try {
      await createUser(email, password).then(async () => {
        await updateUser(name);
        await userLogOut();
        navigate("/dashboard/profile");
        toast.success("Account Created");
      });
    } catch (err) {
      toast.error(err.message);
    }
    setDisable(false);
  };

  return (
    <>
      <div>
        <h1 className="text-center text-2xl font-bold uppercase text-white">
          Create Account
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5 px-4"
      >
        <input
          {...register("name")}
          className="outline-none px-2 py-1 text-lg rounded-md"
          placeholder="Name"
          type="text"
          defaultValue="Student"
          required
        />

        <input
          {...register("email")}
          className="outline-none px-2 py-1 text-lg rounded-md"
          placeholder="E-mail"
          type="email"
          defaultValue="student@gmail.com"
          required
        />

        <input
          {...register("password")}
          className="outline-none px-2 py-1 text-lg rounded-md"
          placeholder="Password"
          type="password"
          defaultValue="123456"
          required
        />

        <input
          type="submit"
          value="Sign Up"
          className={`${
            isDisable ? "text-primary/30 cursor-wait" : "cursor-pointer"
          } text-lg font-bold text-secondary bg-white py-1 rounded-md uppercase`}
          disabled={isDisable}
        />
      </form>
    </>
  );
};

export default RegisterForm;
