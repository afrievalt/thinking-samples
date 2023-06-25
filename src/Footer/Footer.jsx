import React from "react";
import Filters from "./Filters";
import ItemsLeftMessage from "./ItemsLeftMessage";
import ClearButton from "./ClearButton";

function Footer() {
  return (
    <footer className="inline">
      <ItemsLeftMessage />
      <Filters />
      <ClearButton />
    </footer>
  );
}

export default Footer;
