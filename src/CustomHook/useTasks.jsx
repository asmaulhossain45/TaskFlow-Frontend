import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxios from "./useAxios";

const useTasks = () => {
  const axiosPublic = useAxios();
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    refetch,
    data: tasks,
  } = useQuery({
    queryKey: [`Tasks`],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(`/tasks/${user?.email}`);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  return { isLoading, refetch, tasks };
};

export default useTasks;
