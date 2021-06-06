import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  TrafficLayer,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import { getCrashes } from "../api/api";
import CrashCard from "../chart/crash-card";

require('dotenv').config();

const libraries = ["places"];
const mapContainerStyle = {
  height: "60vh",
  width: "70vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 28,
  lng: -84,
};

export default function Map() {

  const [values, setValues] = useState({
    crashList: [],
    error: "",
  });
  const [selected, setSelected] = useState(null);

  const { crashList, error } = values;

  const init = () => {
    getCrashes().then(data => {
       
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          crashList: data
        });
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={7}
        center={center}
        options={options}
      >
        <TrafficLayer autoUpdate />
        {crashList.map((crash) => (
          <Marker
            key={crash.report_number}
            position={{ lat: crash.latitude, lng: crash.longitude }}
            onClick={() => {
              setSelected(crash);
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.latitude, lng: selected.longitude }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <CrashCard crash={selected} />
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}