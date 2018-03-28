import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import React from "react";
const NYCMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 40.718943, lng: -73.842145 }}>
      {props.markers.map((marker, index) => {
        return (
          <Marker
            key={index}
            position={{ lat: parseFloat(marker.latitude, 10), lng: parseFloat(marker.longitude, 10) }}
          >
            {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>test</InfoWindow>}
          </Marker>
        );
      })}
    </GoogleMap>
  ))
);

export default NYCMap;
