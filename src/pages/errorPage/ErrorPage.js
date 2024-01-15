import React from "react";
import Header from "../../components/header/Header";
import Error404 from "../../components/Error404";

const ErrorPage = () => {
  return (
    <div className="erro-page">
      <Header />
      <main>
        <Error404 />
      </main>
    </div>
  );
};

export default ErrorPage;
