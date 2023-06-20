import React from "react";
import { useContext } from "react";
import { ButtonGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesContext";
import { ThemeContext } from "../../context/ThemeContext";

import TextIconButton from "./TextIconButton";

const Navbar = () => {
  const { toggleFavoriteContainer } = useContext(FavoritesContext);
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-between py-3"
    >
      <Link to="/">
        <h1 className="fs-6 primary-color">Web Topics</h1>
      </Link>
      <ButtonGroup>
        <TextIconButton
          buttonClassName=" px-2 py-1 me-2 border-secondary-subtle rounded-1 d-flex align-items-center bg-transparent custom-primary-hover body-text-color dark-mode"
          iconClassName="me-sm-2 md hydrated"
          iconId="mode-icon"
          iconName={isDarkTheme ? "sunny-outline" : "moon-outline"}
          buttonSpanText={isDarkTheme ? "Light Mode" : "Dark Mode"}
          buttonSpanId="mode-text"
          spanClassName="d-sm-inline-block d-none"
          buttonFunction={() => toggleTheme()}
        />
        <TextIconButton
          buttonClassName=" px-2 py-1 border-secondary-subtle rounded-1 d-flex align-items-center bg-transparent custom-primary-hover body-text-color favorites"
          iconClassName="me-sm-2 md hydrated"
          iconId="fav-icon"
          iconName="heart-outline"
          buttonSpanText="Favorites"
          buttonSpanId="favorites"
          spanClassName="d-sm-inline-block d-none"
          buttonFunction={() => toggleFavoriteContainer()}
        />
      </ButtonGroup>
    </Container>
  );
};

export default Navbar;
