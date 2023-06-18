import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DetailsWrapper, ListContainer } from "../components/Details";
import { Header, Footer, Loading, Favorites } from "../components/Shared";
import { FavoritesContext, TopicsContext } from "../context";

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
  }, [id, fetchTopicById]);

  if (loading) return <Loading />;
  return (
    <main className="flex-grow-1 flex-shrink-0">
      {topic && (
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
          {error && (
            <h1 class="d-flex error-msg fs-4 fw-bold justify-content-center pb-4 text-lines-color">
              {error}
            </h1>
          )}
        </section>
      )}
      <section className="container-fluid custom-bg-color h-100 px-custom py-4 list-items-container">
        {topic && <ListContainer subTopics={topic.subtopics} />}
      </section>
    </main>
  );
};

export default Details;
