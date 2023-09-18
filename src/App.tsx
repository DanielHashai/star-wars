import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TimeLine from "./Components/TimeLine/TimeLine";
import TableOfContents from "./Components/TableOfContents/TableOfContents";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <TableOfContents />
      <TimeLine />
    </div>
  );
}

export default App;
