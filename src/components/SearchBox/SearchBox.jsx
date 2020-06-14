import React from "react";
import "./SearchBox-Styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input type="search" placeholder={placeholder} onChange={handleChange} />
);
