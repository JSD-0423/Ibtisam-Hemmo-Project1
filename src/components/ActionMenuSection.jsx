import React from "react";
import InputWrapper from "./InputWrapper";
import SelectWrapper from "./SelectWrapper";

const ActionMenuSection = () => {
  return (
    <section
      role="search"
      className="col-md custom-default-bg-color custom-shadow d-flex flex-md-row flex-sm-column mt-3 mb-3 overflow-hidden rounded search-bar"
    >
      <InputWrapper />
      <div className="col-12 col-md-4 d-flex fs-6">
        <SelectWrapper />
      </div>
    </section>
  );
};

export default ActionMenuSection;
