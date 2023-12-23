import PropTypes from "prop-types";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxios from "../../../CustomHook/useAxios";
import useTasks from "../../../CustomHook/useTasks";
import { AuthContext } from "../../../Providers/AuthProvider";

const CreateTask = ({ toggle, setToggle }) => {
  const axiosPublic = useAxios();
  const { user } = useContext(AuthContext);
  const { refetch } = useTasks();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const newData = { ...data, status: "To-Do", user: `${user.email}` };
    try {
      await axiosPublic.post("/task", newData).then((res) => {
        console.log(res);
        refetch();
        toast.success("Task Saved");
        reset();
        setToggle(!toggle);
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center text-2xl text-white font-semibold my-5">
          Create Task
        </h1>
      </div>
      <form
        method="dialog"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5 px-4"
      >
        <input
          {...register("title")}
          className="outline-none px-2 py-1 text-lg rounded-md"
          placeholder="Title"
          type="text"
          required
        />

        <div className="flex gap-5">
          <select
            {...register("priority")}
            className="outline-none px-2 py-1 text-lg rounded-md resize-none"
          >
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>

          <input
            type="date"
            {...register("deadline")}
            className="w-full outline-none px-2 py-1 text-lg rounded-md resize-none"
            required
          />
        </div>

        <textarea
          {...register("description")}
          className="w-full outline-none px-2 py-1 text-lg rounded-md resize-none"
          placeholder="Description"
          rows="5"
          required
        ></textarea>

        <input
          type="submit"
          value="Save"
          className={`text-lg font-bold text-secondary bg-white py-1 rounded-md uppercase`}
        />
      </form>
    </>
  );
};

export default CreateTask;

CreateTask.propTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.func,
};
