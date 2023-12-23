import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import useTasks from "../../../CustomHook/useTasks";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

const Tasks = () => {
  const [isOpen, setOpen] = useState(false);
  const { tasks } = useTasks();

  return (
    <div className="relative flex flex-col items-center pt-3 bg-secondary/10 w-screen h-screen">
      <div>
        <button
          onClick={() => setOpen(!isOpen)}
          className="absolute right-5 text-xl text-white bg-secondary p-1 rounded-full"
        >
          <FaPlus />
        </button>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } fixed top-0 left-0 bg-secondary h-screen`}
        >
          <CreateTask setOpen={setOpen} isOpen={isOpen} />
        </div>
      </div>

      <TaskList tasks={tasks} />
    </div>
  );
};

export default Tasks;
