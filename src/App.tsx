import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TimeLine from "./Components/TimeLine/TimeLine";
import TableOfContents from "./Components/TableOfContents/TableOfContents";

import FilmModel from "./Models/FilmModel";
import { AppContext } from "./Context/appContext";
function App() {
  const [currentFilm, setCurrentFilm] = useState<FilmModel>();
  return (
    <AppContext.Provider value={{ currentFilm, setCurrentFilm }}>
      <div style={{ display: "flex" }}>
        <TableOfContents />
        <TimeLine />
      </div>
    </AppContext.Provider>
  );
}

export default App;
