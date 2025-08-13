import React from "react";
import Banner from "Components/Banner";
import Footer from "Components/Footer";
import Header from "Components/Header";
import LoginRegisterForm from "Components/LoginRegisterForm";

const Home = () => {
  return (
    <div className="w-full font-sans bg-[#f4f1ea] min-h-screen">
      <Header />

      <section
        className=" bg-[#ffd767] max-w-7xl mx-auto pt-4 sm:pt-5 flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-6???
6 sm:mt-5 mb-5 w-full px-4 sm:px-6"
      >
        <Banner />
        <LoginRegisterForm />
      </section>

      <section className="max-w-7xl mx-auto py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 text-[#382110]">
        <div>
          <h2 className="font-serif text-base xs:text-lg sm:text-xl font-medium mb-2">
            Deciding what to read next?
          </h2>
          <p className="text-xs xs:text-sm sm:text-base leading-relaxed">
            You’re in the right place. Tell us what titles or genres you’ve
            enjoyed in the past and we’ll give you surprisingly insightful
            recommendations.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-base xs:text-lg sm:text-xl font-medium mb-2">
            What are your friends reading?
          </h2>
          <p className="text-xs xs:text-sm sm:text-base leading-relaxed">
            Chances are your friends are discussing their favorite (and least
            favorite) books on Goodreads.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
