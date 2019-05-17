import React from "react";
import logo from "./logo.png";
import "./App.css";
import HotelList from "./components/HotelList";
import Filter from "./components/Filter";
import Header from "./components/Header";
// import HomePageBanner from "./components/HomePageBanner";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePageBanner /> */}
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <Filter />
          </div>
          <div className="col-md-8 col-sm-12">
            <HotelList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
