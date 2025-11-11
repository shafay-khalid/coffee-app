import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.error(err);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-body-color)] px-4">
      <div className="text-center max-w-lg">
        {/* Error Code */}
        <h1 className="text-8xl font-bold text-[var(--color-second-color)] drop-shadow-lg">
          {err.status || "404"}
        </h1>

        {/* Error Message */}
        <h2 className="mt-4 text-2xl font-semibold text-[var(--color-title-color)]">
          {err.statusText || "Oops! Something went wrong"}
        </h2>

        <p className="mt-2 text-[var(--color-text-color)]">
          {err.data || "The page you’re looking for doesn’t exist or an error occurred."}
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 rounded-2xl text-lg font-medium 
          bg-[var(--color-first-color)] text-[var(--color-white-color)] 
          hover:bg-[var(--color-first-color-alt)] transition-colors shadow-md"
        >
          Go Back Home
        </Link>
      </div>

      {/* Fancy Illustration / Decorative */}
      <div className="absolute bottom-8 text-sm text-[var(--color-text-color-light)]">
        &copy; {new Date().getFullYear()} Shahmir. All Rights Reserved.
      </div>
    </div>
  );
};

export default ErrorPage;
