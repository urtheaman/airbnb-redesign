import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const CustomMap = ({ searchData }) => {
  // transform the result object into {latitude : , longitude: }
  const coordinates = searchData.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <ReactMapGL
      className="relative"
      mapStyle="mapbox://styles/urtheaman/cl12773u4001g14l91i9pzsha"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      attributionControl={false}
      onSourceData={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
};

export default CustomMap;
