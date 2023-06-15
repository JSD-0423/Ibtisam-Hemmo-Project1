import React from "react";
import courses from "../staticData/courses";
import CardWrapper from "./CardWrapper";

const CardsSection = () => {
  return (
    <div className="cards row d-flex g-4 row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-1 row-cols-sm-2 row-cols-md-3 ">
      {courses.map((course, key) => (
        <CardWrapper data={course} id={key} key={key} />
      ))}
    </div>
  );
};

export default CardsSection;
