import React from "react";
import "./App.css";
import Main from "./component/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrackFetch from "./component/TrackFetch";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:trackId" element={<TrackFetch />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
