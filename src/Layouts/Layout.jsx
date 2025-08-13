import React from "react";
import Footer from "Components/Footer";
import Header from "Components/Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#f4f1ea] p-0 m-0">
      <Header />
      <main className=" min-h-[calc(100vh-200px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;