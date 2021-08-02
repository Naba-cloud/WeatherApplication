import "./styles.css";
import React from "react";
import WeatherData from "./WeatherData";
import Header from "./Header";
import Display from "./Display";

export default function App() {
  return (
    <div className="App" >
      <Header />
      <WeatherData />
    </div>
  );
}
