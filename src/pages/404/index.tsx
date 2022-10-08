import { Link } from "react-router-dom";
import notFound from "../../assets/404.svg";
const NotFoundPage = () => {
  return (
    <main className="mx-4 my-8 lg:mx-auto lg:max-w-[1248px] flex flex-col items-center gap-4 w-full">
      <img src={notFound} alt="not found" className="w-[100%] lg:w-[50%]" />
      <h1 className="font-bold text-4xl text-center mt-6">
        The page you requested cannot be found.
      </h1>
      <Link
        to="/"
        className="bg-accent text-white px-4 py-2 rounded-md text-xl font-medium hover:ring-2 hover:ring-accent hover:bg-white hover:text-accent transition-colors duration-150">
        Go back to home page
      </Link>
    </main>
  );
};

export default NotFoundPage;
