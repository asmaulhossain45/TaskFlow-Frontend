import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import toast from "react-hot-toast";
import { FaMinusCircle } from "react-icons/fa";
import useAxios from "../../../CustomHook/useAxios";
import useTasks from "../../../CustomHook/useTasks";

const TaskCard = ({ task }) => {
  const axiosPublic = useAxios();
  const { refetch } = useTasks();
  const { _id, title, priority, deadline, description } = task;

  let color = "bg-warning";

  if (priority === "Moderate") {
    color = "bg-primary";
  }

  if (priority === "High") {
    color = "bg-success";
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleDeleteTask = async () => {
    try {
      await axiosPublic.delete(`/task/${_id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          refetch();
          toast(`${title} Removed`, { icon: "🏹" });
        } else {
          toast.error(`${title} Remove Failed`);
        }
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div
      draggable
      ref={drag}
      className={`${
        isDragging && "opacity-50"
      } bg-white mt-2 rounded-md p-3 space-y-2`}
    >
      <div className="flex justify-between items-start">
        <div>
        <h1 className="font-semibold">{title}</h1>
        <h1 className="text-xs text-justify mt-1 text-black/70">{description}</h1>
        </div>
        <button onClick={handleDeleteTask} className="text-error">
          <FaMinusCircle />
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1
          className={`${color} text-xs text-white font-semibold px-3 py-1 rounded-full`}
        >
          {priority}
        </h1>
        <h1 className="text-xs font-semibold">{deadline}</h1>
      </div>
    </div>
  );
};

export default TaskCard;

TaskCard.propTypes = {
  task: PropTypes.object,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};
