import React from "react";
import Routers from "../Routes/Routers";
import Footer from "../Client/Components/Footer/Footer";
import Header from "../Client/Components/Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
};

export default Layout;
