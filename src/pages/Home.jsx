import React, { useContext } from "react";

import { Header, Footer, Loading } from "../components/Shared";
import { ActionMenuSection, CardsSection } from "../components/Home";
import { TopicsContext } from "../context/TopicsContainer";

const Home = () => {
  const { topics, loading, error } = useContext(TopicsContext);
  if (loading) return <Loading />;
  return (
    <>
      <Header />
      <main className="container-fluid custom-bg-color flex-grow-1">
        <ActionMenuSection />
        <h2 className="subtitle fs-5 mb-4 fw-bold error-msg body-text-color">
          {error ? error : '"39" Web Topics Found'}
        </h2>
        <CardsSection topics={topics} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
