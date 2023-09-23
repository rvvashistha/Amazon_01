import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      {/* we gonna put this component out side the Routes coz this is common in all the pages"Components" */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          exact
          path="/home"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* is you want to put two elements in the Route :-
        you need to use ReactFragment here and inside that you put the components */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
