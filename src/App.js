import React from "react";
import Movies from "./components/Movies";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header branding="Movie Collections" />
      <div className="container">
        <Movies />
      </div>
    </div>
  );
}

export default App;
