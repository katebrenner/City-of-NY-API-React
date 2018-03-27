import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import React from "react";

const NYCMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 40.718943, lng: -73.842145 }}>
      {props.markers.map(marker => {
        return <Marker position={{ lat: parseFloat(marker.latitude, 10), lng: parseFloat(marker.longitude, 10) }} />;
      })}
    </GoogleMap>
  ))
);

export default NYCMap;
