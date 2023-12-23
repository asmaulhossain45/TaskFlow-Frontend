import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useTasks = () => {
  const axiosPublic = useAxios();

  const {
    isLoading,
    refetch,
    data: tasks,
  } = useQuery({
    queryKey: ["Tasks"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get("/tasks");
        return res.data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  return { isLoading, refetch, tasks };
};

export default useTasks;
