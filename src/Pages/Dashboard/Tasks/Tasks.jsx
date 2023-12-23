import useTasks from "../../../CustomHook/useTasks";
import TaskList from "./TaskList";

const Tasks = () => {
  const { tasks } = useTasks();

  return (
    <div className="flex flex-col items-center pt-5 w-full h-full">
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Tasks;
