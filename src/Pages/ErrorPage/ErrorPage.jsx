import ErrorImg from "../../assets/ErrorImg.png";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-primary/10">
      <img className="object-cover" src={ErrorImg} alt="" />
    </div>
  );
};

export default ErrorPage;
