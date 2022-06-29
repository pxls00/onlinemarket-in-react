import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/categories/:category" element={<Category />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
