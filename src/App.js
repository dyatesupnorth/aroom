import React from "react";
import logo from "./logo.png";
import "./App.css";
import HotelList from "./components/HotelList";
import Filter from "./components/Filter";
import Header from "./components/Header";
import HomePageBanner from "./components/HomePageBanner";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePageBanner />
      <Filter />
      <HotelList />
    </div>
  );
}

export default App;
