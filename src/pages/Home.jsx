import React, { useContext } from "react";
import { TopicsContext } from "../context";
import { Loading } from "../components/Shared";
import { ActionMenuSection, CardsSection } from "../components/Home";

const Home = () => {
  const { filteredTopics, loading, error } = useContext(TopicsContext);

  return (
    <main className="container-fluid custom-bg-color flex-grow-1">
      <ActionMenuSection />
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="subtitle fs-5 mb-4 fw-bold error-msg body-text-color">
            {error ? error : `"${filteredTopics.length}" Web Topics Found`}
          </h2>
          <CardsSection topics={filteredTopics} />
        </>
      )}
    </main>
  );
};

export default Home;
