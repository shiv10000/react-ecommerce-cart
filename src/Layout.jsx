import { useState } from "react";
import Header from "./Header/Header";

import Footer from "./Footer/Footer";
import { Outlet } from "react-router";

function Layout() {
  const [selectedIds, setSelectedIds] = useState([]);

  const addToCart = (id) => {
    setSelectedIds((currentIds) => [...currentIds, id]);
  };

  const removeFromCart = (id) => {
    setSelectedIds((currentIds) => {
      const indexToRemove = currentIds.indexOf(id);
      if (indexToRemove === -1) return currentIds;
      return currentIds.filter((_, index) => index !== indexToRemove);
    });
  };

  return (
    <div className="pb-72 sm:pb-56">
      <Header cartCount={selectedIds.length} />
      <Outlet context={{ selectedIds, addToCart, removeFromCart }} />
      <Footer />
    </div>
  );
}

export default Layout;
