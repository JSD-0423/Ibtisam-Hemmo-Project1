import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import { Favorites, Footer, Header } from "../components/Shared";
import { FavoritesContext } from "../context";

const Layout = () => {
  const { isFavoriteShown } = useContext(FavoritesContext);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {isFavoriteShown && <Favorites />}
    </>
  );
};

export default Layout;
