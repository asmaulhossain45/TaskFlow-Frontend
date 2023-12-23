import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import TaskSection from "./TaskSection";

const TaskList = ({ tasks, setTasks }) => {
  const [todo, setTodo] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const fTodo = tasks?.filter((task) => task?.status === "To-Do");
    const fOngoing = tasks?.filter((task) => task?.status === "Ongoing");
    const fCompleted = tasks?.filter((task) => task?.status === "Completed");

    setTodo(fTodo);
    setOngoing(fOngoing);
    setCompleted(fCompleted);
  }, [tasks]);

  const taskNames = ["To-Do", "Ongoing", "Completed"];

  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-6 w-full px-5 md:px-10">
      {taskNames &&
        taskNames.map((taskName, idx) => (
          <TaskSection
            key={idx}
            taskName={taskName}
            tasks={tasks}
            setTasks={setTasks}
            todo={todo}
            ongoing={ongoing}
            completed={completed}
          />
        ))}
    </div>
  );
};

export default TaskList;

TaskList.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};
