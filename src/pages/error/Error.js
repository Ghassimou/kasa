import React from "react";
import Header from "../../components/header/Header";
import Error404 from "../../components/error/Error404";
import Footer from "../../components/footer/Footer";

const Error = () => {
  return (
    <div className="error-page">
      <Header />
      <main>
        <Error404 />
      </main>
      <Footer />
    </div>
  );
};

export default Error;
