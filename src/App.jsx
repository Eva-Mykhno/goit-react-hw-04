import { useState, useEffect } from "react";
import "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <SearchBar />
    </>
  );
};

export default App;
