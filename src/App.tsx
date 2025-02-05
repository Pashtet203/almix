import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import * as pages from "./pages"
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (

    <div className="App">
        <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={<pages.HomePage/>} />
            <Route path="*" element={<pages.NotFoundPage/>} />
        </Routes>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
