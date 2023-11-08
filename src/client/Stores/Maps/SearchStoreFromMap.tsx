"use client";
import { Box, Button, Divider, IconButton } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { Feature, Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { defaults } from "ol/control";
import StoreIcon from "@mui/icons-material/Store";

//icon
import PlaceIcon from "@mui/icons-material/Place";
import Imag from "../../../../public/imgs/shop-search.svg";
import { Icon } from "ol/style";
const SearchStoreFromMap = () => {
  const [latitude, setLatitude] = useState<any>(null);
  const [longitude, setLongitude] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  function success(pos: any) {
    console.log(pos);
    const crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    setLatitude(crd.latitude);
    setLongitude(crd.longitude);
  }

  function errorfn(err: any) {
    // alert("لطفا gps خود را فعال کنید.");
    console.log(`ERROR(${err.code}): ${err.message}`);
  }

  const getCurrentLocation = () => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        success,
        errorfn /* options */
      );
    }
  };
  useEffect(() => {
    getCurrentLocation();
    return () => {
      setMap(null);
    };
  }, []);
  const handleClickSelectLocation = () => {
    console.log("a");
  };

  const [map, setMap] = useState<any>(null);
  const mapElement = useRef();
  const mapRef = useRef();
  mapRef.current = map;

  useEffect(() => {
    const osmLayer = new TileLayer({
      source: new OSM(),
    });


     // Create an icon style with an image
     var iconStyle = new Style({
      image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
          anchor: [0.5, .5],
    
          src: Imag.src,
          scale: 0.05,
          
      }))
  })
    const iconFeature = new Feature({
      geometry: new Point([52.42612526590386, 30.753510595746793]),
      name: "Null Island",
      population: 4000,
      rainfall: 500,
      style:iconStyle
    });
    const iconFeature2 = new Feature({
      geometry: new Point([54.42612526590386, 31.753510595746793]),
      name: "Null Island",
      population: 4000,
      rainfall: 500,
    });

    
    iconFeature2.setStyle(iconStyle)
   
   
  

    // Add the feature to the vector source

    const vectorSource = new VectorSource({
      features: [iconFeature, iconFeature2],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({}),
    });

    const initialMap = new Map({
      target: mapElement.current,
      layers: [osmLayer, vectorLayer],
      view: new View({
        center: [54.42612526590386, 31.753510595746793],
        projection: "EPSG:4326",
        zoom: 14,
      }),
      controls: defaults({ attribution: false, zoom: false }),
    });
    map?.getView().setCenter([longitude, latitude]);
    setMap(initialMap);

    // Add code to get current location here
    return () => {
      setMap(null);
      map?.dispose();
    };
  }, []);
  useEffect(() => {
    if (map) {
      map?.getView().setCenter([longitude, latitude]);
    }
  });

  return (
    <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
      <Box
        style={{ height: "100%", width: "100%", position: "absolute" }}
        ref={mapElement}
        className="map-container"
      ></Box>
      <IconButton
        disableRipple
        disableFocusRipple
        onClick={handleClickSelectLocation}
        // className="center"

        sx={{
          position: "absolute",
          top: " 50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 44,

          mt: -1.5,
        }}
      >
        <PlaceIcon
          sx={{
            fontSize: "2rem",
            filter: "drop-shadow(0px 0px 0px #777)",
            color: "#fa015e",
            "&:active": {
              color: "#c8014b",
              filter: "drop-shadow(0px 0px 0px #777)",
            },
          }}
        />
      </IconButton>
    </Box>
  );
};

export default SearchStoreFromMap;
