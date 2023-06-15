import React from "react";
import { useParams } from "react-router-dom";
import DetailsWrapper from "../components/details/DetailsWrapper";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListContainer from "../components/ListContainer";

const Details = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <main className="flex-grow-1 flex-shrink-0">
        <section className="bg-grey container-fluid px-custom">
          <DetailsWrapper />
        </section>
        <section class="container-fluid custom-bg-color h-100 px-custom py-4 list-items-container">
          <ListContainer />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Details;
