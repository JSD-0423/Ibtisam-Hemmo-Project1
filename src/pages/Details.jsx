import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DetailsWrapper, ListContainer } from "../components/Details";
import { Header, Footer, Loading, Favorites } from "../components/Shared";
import { FavoritesContext, TopicsContext } from "../context";

const Details = () => {
  const { id } = useParams();
  const { error, fetchTopicById } = useContext(TopicsContext);
  const { isFavoriteShown } = useContext(FavoritesContext);
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
    <>
      <Header />
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
          </section>
        )}
        <section className="container-fluid custom-bg-color h-100 px-custom py-4 list-items-container">
          {topic && <ListContainer subTopics={topic.subtopics} />}
        </section>
      </main>
      <Footer />
      {isFavoriteShown && <Favorites />}
    </>
  );
};

export default Details;
