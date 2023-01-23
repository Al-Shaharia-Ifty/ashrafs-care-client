import React from "react";
import { Link, useRouteError } from "react-router-dom";
import PrimaryButton from "../Components/PrimaryButton";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <div>
          <h1 className="text-4xl text-primary">404 Page Not Found</h1>
          <br />
          {error && (
            <div>
              <p className="text-red-500">
                {" "}
                {error.statusText || error.message}
              </p>
              <p>{error.status}</p>
            </div>
          )}
          <br />
          <Link to="/">
            <PrimaryButton>Back to Home</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
