import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div>
        <img src="/404.png" alt="Page Not Found 404." />
        <h2 className="text-3xl font-bold text-center mb-4 mt-8">
          Oops! Page not found.
        </h2>
        <Link to="/" className="text-center block underline">
          Go Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
