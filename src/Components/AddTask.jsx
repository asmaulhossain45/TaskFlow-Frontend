import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxios from "../CustomHook/useAxios";

const AddTask = () => {
  const axiosPublic = useAxios();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const newData = { ...data, status: "To-Do" };
    console.log(newData);
    try {
      await axiosPublic.post("/task", newData).then((res) => {
        console.log(res);
        toast.success("Task Saved");
        reset();
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
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

export default AddTask;
