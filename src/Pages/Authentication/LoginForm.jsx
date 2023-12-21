import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="relative">
        <h1 className="text-center text-2xl font-bold uppercase text-white">
          Login with
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5 px-4"
      >
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
          value="Sign In"
          className="text-lg font-bold text-secondary bg-white py-1 rounded-md uppercase"
        />
      </form>
      <SocialLogin/>
    </>
  );
};

export default LoginForm;
