import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://task-flow-backend.vercel.app/",
  withCredentials: true,
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
