import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex font-poppins flex-col gap-2 items-center justify-center">
      <h1 className="text-primary text-2xl font-semibold">
        This page is coming soon, stay tuned 🎶
      </h1>
      <Link
        className="bg-blue-200 py-3 px-3 border border-blue-900 text-blue-900"
        to={"/"}
      >
        Redirect to sign in
      </Link>
    </section>
  );
};

export default NotFound;
