import React from "react";
import Rating from "../Shared/Rating";

const DetailsContent = () => {
  return (
    <div className="text-container w-60 text-white d-flex flex-column gap-3 py-2">
      <div>
        <h2 className="secondary-color fw-semibold fs-6">
          Web Development Languages
        </h2>
        <h3 className="fs-5 fw-bold">CSS</h3>
        <div className="text-orange mt-0">
          <Rating rating={80} />
        </div>
      </div>
      <p>
        CSS (Cascading Style Sheets) is a style sheet language used for
        describing the presentation of a document written in HTML or XML,
        including colors, layout, fonts, and animations. It separates the
        presentation from the content and structure of a web page, allowing for
        greater flexibility and control over the design of a website.
      </p>
    </div>
  );
};

export default DetailsContent;
