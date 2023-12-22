import "react-datepicker/dist/react-datepicker.css";
import { FaPlus } from "react-icons/fa";
import AddTask from "../../../Components/AddTask";
import Completed from "../Completed/Completed";
import Ongoing from "../Ongoing/Ongoing";
import ToDo from "../ToDo/ToDo";

const Dashboard = () => {
  return (
    <div>
      {/* ==== Add Task Modal ===== */}
      <div className="relative">
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="absolute right-2 top-2 rounded-md bg-secondary text-white p-2"
        >
          <FaPlus size={24} />
        </button>
        <dialog
          id="my_modal_3"
          className="modal max-w-80 w-full bg-primary rounded-md overflow-hidden pb-5"
        >
          <div className="modal-box">
            {/* ===== Close Button ===== */}
            <form method="dialog" className="bg-secondary py-3 mb-5">
              <h1 className="text-2xl text-center font-bold text-white">
                Create New Task
              </h1>
              <button className="absolute right-0 top-0 text-xl text-white font-bold bg-secondary px-2 rounded-es-md rounded-se-md">
                ✕
              </button>
            </form>
            <AddTask />
          </div>
        </dialog>
      </div>

      {/* ===== Task List ===== */}
      <div className="flex justify-evenly">
        <ToDo /> <Ongoing /> <Completed />
      </div>
    </div>
  );
};

export default Dashboard;
