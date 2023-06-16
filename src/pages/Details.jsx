import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DetailsWrapper, ListContainer } from "../components/Details";
import { Header, Footer, Loading } from "../components/Shared";
import { TopicsContext } from "../context/TopicsContainer";

const Details = () => {
  const { id } = useParams();
  const { error, fetchTopicById } = useContext(TopicsContext);
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopic = async () => {
      const fetchedTopic = await fetchTopicById(id);
      setTopic(fetchedTopic);
      setLoading(false);
    };

    fetchTopic();
  }, [id]);

  if (loading) return <Loading />;
  return (
    <>
      <Header />
      <main className="flex-grow-1 flex-shrink-0">
        <section className="bg-grey container-fluid px-custom">
          <DetailsWrapper
            id={topic.id}
            name={topic.name}
            category={topic.category}
            description={topic.description}
            topic={topic.topic}
            rating={topic.rating}
            image={topic.image}
          />
        </section>
        <section className="container-fluid custom-bg-color h-100 px-custom py-4 list-items-container">
          <ListContainer subTopics={topic.subtopics} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Details;
