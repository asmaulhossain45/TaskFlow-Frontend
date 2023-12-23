import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import toast from "react-hot-toast";
import useAxios from "../../../CustomHook/useAxios";
import useTasks from "../../../CustomHook/useTasks";
import TaskCard from "./TaskCard";
import TaskHeader from "./TaskHeader";

const TaskSection = ({
  taskName,
  tasks,
  setTasks,
  todo,
  ongoing,
  completed,
}) => {
  const { refetch } = useTasks();
  const axiosPublic = useAxios();

  let text = "To-Do";
  let bg = "bg-warning";
  let taskArray = todo && todo;

  if (taskName === "Ongoing") {
    text = "Ongoing";
    bg = "bg-primary";
    taskArray = ongoing && ongoing;
  }

  if (taskName === "Completed") {
    text = "Completed";
    bg = "bg-success";
    taskArray = completed && completed;
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = async (id) => {
    try {
      await axiosPublic.patch(`/task/${id}`, {taskName}).then((res) => {
        console.log(res);
        refetch();
        toast("Status Updated");
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div
      ref={drop}
      className={`w-full ${
        isOver && "bg-white/30 pb-24"
      } duration-300 rounded-md`}
    >
      <TaskHeader text={text} bg={bg} taskArray={taskArray} />

      {taskArray &&
        taskArray.map((task, idx) => (
          <TaskCard
            bg={bg}
            key={idx}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
    </div>
  );
};

export default TaskSection;

TaskSection.propTypes = {
  taskName: PropTypes.string,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  todo: PropTypes.array,
  ongoing: PropTypes.array,
  completed: PropTypes.array,
};
