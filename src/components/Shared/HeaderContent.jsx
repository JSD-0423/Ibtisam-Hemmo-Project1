import React from "react";
import { Container } from "react-bootstrap";

const HeaderContent = () => {
  return (
    <>
      <div>
        <div className="custom-triangle-container position-relative"></div>
      </div>
      <Container fluid className="d-flex justify-content-center">
        <div className="custom-translate-top lh-1">
          <h2 className="secondary-color fw-bold fs-5">
            Welcome to our website!
          </h2>
          <p className="mb-0 mb-3 body-text-color">
            We have a new design that is fresh, modern, and easy to use.
          </p>
        </div>
      </Container>
    </>
  );
};

export default HeaderContent;
