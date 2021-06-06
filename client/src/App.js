import React from "react";
import Header from './components/header';
import Map from "./components/map/map";
import CrashList from "./components/chart/crash-list";
import "./App.css";

export default function App() {

  return (
    <div className="app">
      <div className="header-container">
        <Header />
      </div>
      <div className="map-list-container">
        <div className="map-container">
          <Map />
        </div>
        <div className="list-container">
          <CrashList />
        </div>
      </div>
    </div>
  );
}