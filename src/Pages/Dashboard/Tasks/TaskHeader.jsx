import PropTypes from "prop-types";
import CountUp from "react-countup";

const TaskHeader = ({ text, bg, taskArray }) => {
  return (
    <div
      className={`${bg} w-full flex justify-center items-center gap-2 px-5 py-2 rounded-md font-semibold`}
    >
      <h1 className="text-white">{text}</h1>
      <h1 className="flex justify-center items-center w-6 h-6 rounded-full bg-white">
        {taskArray ? <CountUp end={taskArray.length} /> : 0}
      </h1>
    </div>
  );
};

export default TaskHeader;

TaskHeader.propTypes = {
  text: PropTypes.string,
  bg: PropTypes.string,
  taskArray: PropTypes.array,
};
