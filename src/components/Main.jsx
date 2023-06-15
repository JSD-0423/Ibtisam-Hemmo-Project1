import React from "react";
import ActionMenuSection from "./ActionMenuSection";
import CardsSection from "./CardsSection";

const Main = () => {
  return (
    <main className="container-fluid custom-bg-color flex-grow-1">
      <ActionMenuSection />
      <h2 className="subtitle fs-5 mb-4 fw-bold error-msg body-text-color">
        "39" Web Topics Found
      </h2>
      <CardsSection />
    </main>
  );
};

export default Main;
