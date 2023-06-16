import React from "react";

import { Header, Footer } from "../components/Shared";
import { ActionMenuSection, CardsSection } from "../components/Home";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container-fluid custom-bg-color flex-grow-1">
        <ActionMenuSection />
        <h2 className="subtitle fs-5 mb-4 fw-bold error-msg body-text-color">
          "39" Web Topics Found
        </h2>
        <CardsSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
