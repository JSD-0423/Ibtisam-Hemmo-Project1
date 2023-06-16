import React from "react";
import DetailsCard from "./DetailsCard";
import DetailsContent from "./DetailsContent";

const DetailsWrapper = () => {
  return (
    <div className="details-container position-relative py-3">
      <DetailsContent />
      <DetailsCard />
    </div>
  );
};

export default DetailsWrapper;
