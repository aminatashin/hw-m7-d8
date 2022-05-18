import React from "react";

import "./App.css";
import Main from "./component/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
