import Hamburger from "hamburger-react";
import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import TextLogo from "../../assets/TaskFlow-Text.png";
import logo from "../../assets/logo.png";
import CreateTask from "./Tasks/CreateTask";
import Tasks from "./Tasks/Tasks";

const Dashboard = () => {
  const [isOpen, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { loading, userLogOut } = useContext(AuthContext);
  if (loading) {
    return (
      <span className="loading loading-ring loading-lg h-screen text-center"></span>
    );
  }

  return (
    <div className="relative max-w-7xl mx-auto h-screen bg-secondary/10">
      <div className="flex lg:hidden items-center justify-between shadow-md px-4 md:px-8 lg:px-0 lg:pr-8">
        <div className="flex items-center gap-2">
          {/* ----- Menu Toggle ----- */}
          <div className="text-secondary">
            <Hamburger direction="right" toggled={isOpen} toggle={setOpen} />
          </div>

          {/* ----- Logo Text ----- */}
          <div className="w-36">
            <img src={TextLogo} alt="" />
          </div>
        </div>

        {/* ----- Create Task Button ----- */}
        <button
          onClick={() => setToggle(!toggle)}
          className="text-2xl text-white bg-secondary p-1 rounded-full"
        >
          <FaPlus />
        </button>
      </div>

      <div
        className={`${
          toggle ? "" : "hidden"
        } fixed max-w-80 w-full top-0 right-0 z-50 bg-secondary h-screen`}
      >
        <button
          onClick={() => setToggle(!toggle)}
          className="absolute right-0 top-0 bg-primary px-2 py-1 text-2xl text-white rounded-es-md"
        >
          <MdOutlineClose />
        </button>
        <CreateTask setOpen={setOpen} toggle={toggle} />
      </div>

      <div className="flex gap-8 px-4 md:px-8 lg:px-0 lg:pr-8">
        <div
          className={`${
            isOpen ? "fixed  left-0 top-0 bg-white" : "hidden"
          } lg:flex flex-col max-w-64 min-h-screen bg-black/5`}
        >
          <div className="lg:hidden absolute right-0 top-0 text-secondary">
            <Hamburger
              direction="right"
              size={20}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>

          <div className="px-12 border-b-[3px] border-black/10 py-5">
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-col items-center text-xl font-semibold mt-8 text-secondary space-y-2 text-center px-8">
            <Link
              to="/"
              className="w-full bg-white/50 rounded-md px-3 py-1 border"
            >
              Home
            </Link>
            <button
              onClick={() => setToggle(!toggle)}
              className="w-full bg-white/50 rounded-md px-3 py-1 border"
            >
              Create Task
            </button>
            <button
              onClick={userLogOut}
              className="w-full bg-white/50 rounded-md px-3 py-1 border"
            >
              Log Out
            </button>
          </div>
        </div>
        <Tasks />
      </div>
    </div>
  );
};

export default Dashboard;
