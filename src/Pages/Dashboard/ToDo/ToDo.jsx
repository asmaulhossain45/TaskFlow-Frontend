import useTasks from "../../../CustomHook/useTasks";

const ToDo = () => {
  const { isLoading, tasks } = useTasks();
  console.log(tasks);

  return (
    <div className="min-h-screen w-full bg-success/50">
      <h1 className="text-center bg-secondary/20 font-semibold text-white">
        TO DO
      </h1>

      {/* ===== List ===== */}
      <div className="flex flex-col gap-4 p-4">
        { tasks && tasks.map((task, idx) => {
          const { title, priority, deadline, description, status } = task;
          return (
            <div key={idx} className="p-4 bg-black/20 rounded-md">
              <h1>Title: {title}</h1>
              <h1>Status: {status}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDo;
