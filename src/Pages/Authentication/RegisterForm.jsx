import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <h1 className="text-center text-2xl font-bold uppercase text-white">Create Account</h1>
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
          className="text-lg font-bold text-secondary bg-white py-1 rounded-md uppercase"
        />
      </form>
    </>
  );
};

export default RegisterForm;
