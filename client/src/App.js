import React from "react";
import Header from './components/header';
import Map from "./components/map/map";
import CrashList from "./components/chart/crash-list";
import "./App.css";
import Area from './components/chart/area-chart';

export default function App() {
  return (
    <div className="app">
      <div className="header-container">
        <Header />
      </div>
      <div className="row">
        <div className="left">
          <Map />
          <Area />
          </div>
        <div className="right"><CrashList /></div>
      </div>
    </div>
  );
}