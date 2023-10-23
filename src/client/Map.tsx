"use client";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import mapImage from "../public/map.jpg";
import { Map, Feature } from "ol";
import OSM from "ol/source/OSM.js";
import VectorLayer from "ol/layer/Vector.js";
import Source from "ol/source/Source.js";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";
import GeoJSON from "ol/format/GeoJSON.js";

import Point from "ol/geom/Point.js";
import { fromLonLat, transform } from "ol/proj";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import Overlay from "ol/Overlay.js";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import { Stroke, Circle, Fill, Text } from "ol/style";
import MousePosition from "ol/control/MousePosition.js";
import { createStringXY } from "ol/coordinate";
import { FullScreen, defaults as defaultControls } from "ol/control.js";
/* icons */
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { flushSync } from "react-dom";
import PlaceIcon from "@mui/icons-material/Place";
import ScaleLineControl from "ol/control/ScaleLine";
import Geolocation, { GeolocationError } from "ol/Geolocation";
import { Geometry } from "ol/geom";
import axios from "axios";
import RenderFeature, { toFeature } from "ol/render/Feature";
// import { GetAdressFromNeshanApi } from "./serverSide/GetAdressFromNeshanApi";
const source = new VectorSource();
const MapComp = ({ userSelectedLocation, setUserSelectedLocation }) => {
  // State inizialization - State for Map ref and Map
  let [findCurrentLoc, setFindCurrentLoc] = useState(false);
  const [adressFromNeshan, setAdressFromNeshan] = useState({});

  const mapTargetElement = useRef<HTMLDivElement>();
  const [map, setMap] = useState<Map | undefined>();
  const [featuresLayer, setFeaturesLayer] = useState<VectorSource<Geometry>>();
  const popupRef = useRef(null);
  let currentPos = [54.01, 31.9755];
  const [center, setCenter] = useState(currentPos);
  const [point, setPoint] = useState();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const LongLat = [longitude, latitude];
  const [coordinates, setCord] = useState(null);
  const [locationReady, setLocationReady] = useState(false);
  const spanRef = useRef(null);
  const [mapLoading, setMapLoading] = useState("no");
  const [showPopup, setShowPopup] = useState(false);
  const [accuracy, setAccuracy] = useState();
  /* get current location func */
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    console.log(pos);
    setAccuracy(pos.coords.accuracy);
    const crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    setLatitude(crd.latitude);
    setLongitude(crd.longitude);
    setFindCurrentLoc(true);
  }

  function error(err) {
    // alert("لطفا gps خود را فعال کنید.");
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const getCurrentLocation = () => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        success,
        error /* options */
      );
    }
  };

  useEffect(() => {
    // call current location function

    getCurrentLocation();

    //   console.log('gps yes')
    //   new Promise(function(resolve, reject) {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       setLatitude(position.coords.latitude);
    //       console.log("lat", position.coords.latitude);
    //       setLongitude(position.coords.longitude);
    //       console.log("long", position.coords.latitude);
    //       resolve(1)
    //     });
    //   }).then((result) => {
    //     alert('pos set');

    //   })

    // }
    // else{
    //   console.log('gps no')

    let ignore = false;

    return () => {
      ignore = true;
    };
  }, []);

  const fill = new Fill({
    // color: "rgba(19, 196, 214, 1)",
    color: "#fa015e",
  });
  const stroke = new Stroke({
    color: "#fa015e33",
    width: 30,
  });
  const pointStyle = new Style({
    image: new Circle({
      fill: fill,
      stroke: stroke,
      radius: accuracy,
    }),
    fill: fill,
    stroke: stroke,
  });
  // get ref to div element - OpenLayers will render into this div

  const projectionRef = useRef(null);

  const [projectionValue, setProjectionValue] = useState<string>("EPSG:4326");
  const [precisionValue, setPrecisionValue] = useState<number | string>(4);
  const handleChangePrecision = (e: React.FormEvent<HTMLInputElement>) => {
    setPrecisionValue(e.target.value);
  };
  const handleChangeProjection = () => {
    if (projectionValue === "EPSG:4326") {
      setProjectionValue("EPSG:3857");
    } else {
      setProjectionValue("EPSG:4326");
    }
  };

  useEffect(() => {
    setMapLoading("loading");

    console.log("LongLat is :", LongLat);
    /* mousePositionControl */
    const mousePositionControl = new MousePosition({
      coordinateFormat: createStringXY(4),
      projection: projectionValue,
      // comment the following two lines to have the mouse position
      // be placed within the map.
      className: "custom-mouse-position",
      target: document.getElementById("mouse-position"),
    });
    console.log(mousePositionControl);
    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: source,
    });

    // create map

    const initialMap = new Map({
      /*  layers: [
    
    // USGS Topo
    new TileLayer({
      source: new XYZ({
        url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
      })
    }),

    initalFeaturesLayer
    
  ], */
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        initalFeaturesLayer,
      ],
      view: new View({
        // lat long coordinates
        projection: "EPSG:4326",
        // xvz coordinates
        // projection: "EPSG:3857",
        // iran lat long
        center:[54.35485927034388, 31.89744387851659], 
        // multiWorld:true,
        // [54.3512252, 31.837571]
        zoom: 15,
      }),

      controls: defaultControls({ attribution: false }).extend([
        new FullScreen(),
      ]),
    });

    initialMap.setTarget(mapTargetElement.current || "");
    setMap(initialMap);
    setFeaturesLayer(initalFeaturesLayer);

    setMapLoading("yes");

    var fontFamily = "vazir, Verdana, Courier New";

    /* create point to current loc */
    var point = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            geometry: new Point([54.3512252, 31.837571]),
          }),
        ],
      }),
      style: new Style({
        image: new Circle({
          fill: fill,
          stroke: stroke,
          radius: 5,
        }),
        fill: fill,
        stroke: stroke,
      }),
    });

    /* create text to current loc */
    var text = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            geometry: new Point([54.3512252, 31.837571]),
          }),
        ],
      }),
      style: new Style({
        fill: fill,
        stroke: stroke,
        text: new Text({
          text: "موقعیت شما",
          font: "normal 13px vazir,sans-serif",
          fill: new Fill({
            color: "#bb2200",
          }),
        }),
      }),
    });
    /* add layer point and text */
    // initialMap.addLayer(point);
    // map.addLayer(text);

    // const projectionSelect = document.getElementById("projection");
    // projectionSelect.addEventListener("change", function (event) {
    //   mousePositionControl.setProjection(event.target.value);
    // });

    // const precisionInput = document.getElementById("precision");
    // precisionInput.addEventListener("change", function (event) {
    //   const format = createStringXY(event.target.valueAsNumber);
    //   mousePositionControl.setCoordinateFormat(format);
    // });
    // Add a click event listener to the map

    // Clean up the event listener on component unmount
    return () => {
      map?.setTarget(undefined);
    };
  }, []);

  /*   useEffect(() => {
    const geolocation = new Geolocation({
      trackingOptions: {
        enableHighAccuracy: true,
      },
      tracking: true,
      projection: view.getProjection(),
    });
    // listen to changes in position
    geolocation.on("change:position", function (evt) {
      console.log("----------------------");
      setLongitude(geolocation.getPosition()[0]);
      setLatitude(geolocation.getPosition()[1]);
      setFindCurrentLoc(true);
      console.log("geolocation.getPosition() " + geolocation.getPosition());
      console.log("----------------------");
    });
    // listen to error
    geolocation.on("error", function (evt) {
      window.console.log(evt.message);
    });

    return () => {};
  }, []); */

  useEffect(() => {
    if (map) {
      // Example of triggering the overlay on map click
      map.getView().setCenter(LongLat);

      return () => {};
    }
  }, [map]);

  const hancleClickCurrentLoc = () => {
    const mapView = map?.getView();
    getCurrentLocation();
    if (map?.getView().getZoom() < 10) {
      mapView.animate({ center: LongLat }, { zoom: 18 }, { duration: 1000 });
    } else {
      mapView.animate({ center: LongLat }, { duration: 1000 });
    }
  };
  const handleClickSelectLoc = async (e) => {
    if (map.getOverlayById(2)) {
      map?.removeOverlay(map.getOverlayById(2));
    }
    if (source.getFeatureById(1)) {
      source.removeFeature(source.getFeatureById(1));
    }
    const iconFeature = new Feature({
      geometry: new Point(map?.getView().getCenter()),
      name: "selectedPositionFeature",
      street: "ss",
    });
    iconFeature.setId(1);
    const iconStyle = new Style({
      // image: new Icon({
      //   anchor: [0.5, 46],
      //   anchorXUnits: 'fraction',
      //   anchorYUnits: 'pixels',
      //   src: '../public/map.jpg',
      // }),
      image: new Circle({
        fill: fill,
        stroke: stroke,
        radius: 5,
      }),
    });
    iconFeature.setStyle(iconStyle);
    source.addFeature(iconFeature);
    // Add popup

    // write geojson
    var writer = new GeoJSON();
    const res = writer.writeFeature(
      iconFeature instanceof RenderFeature
        ? toFeature(iconFeature)
        : iconFeature
    );
    // console.log(res)
    setAdressFromNeshan(undefined);
    setUserSelectedLocation(map.getView().getCenter());
    setShowPopup(true);

    const popupOverly = new Overlay({
      element: popupRef.current,
      position: map?.getView().getCenter(),
      positioning: "bottom-center",
      id: 2,
    });
    map?.addOverlay(popupOverly);
    // await GetAdressFromNeshanApi(
    //   map.getView().getCenter()[1],
    //   map.getView().getCenter()[0]
    // ).then((res) => {
    //   console.log(res);
    //   setAdressFromNeshan(res.data);
    // });
  };

  return (
    <>
      <Typography
        color="#999 "
        bgcolor="#ddd"
        // borderRadius="30px 30px 0  0"
        p={1.5}
        textAlign="center"
      >
        لطفا آدرس خود را با کلیک بر روی{" "}
        <Box component={"span"} sx={{ color: "rgba(240, 6, 94, 1)" }}>
          نشانگر قرمز
        </Box>{" "}
        مشخص کنید
      </Typography>
      {/* for test map loading  */}
      {/* <Typography>{mapLoading}</Typography> */}

      <Box
          ref={mapTargetElement}
          sx={{
            borderRadius: " 0 0 30px 30px ",
            overflow: "hidden",
            width: "100",
            height: "100vh",
          }}
        >
          

          {/* <Image
          src={mapImage}
          width={400}
          height={400}
          alt="recycle.svg"
          className="center"
        /> */}
        </Box>
        {mapLoading === "loading" ? (
            <CircularProgress
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                margin: "auto",
                zIndex: 44,
                color: "rgba(19, 196, 214, 1)",
              }}
            />
          ) : (
            <IconButton
              disableRipple
              disableFocusRipple
              onClick={(e) => handleClickSelectLoc(e)}
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
                  "&:hover": {
                    color: "#c8014b",
                    filter: "drop-shadow(0px 0px 0px #777)",
                  },
                }}
              />
            </IconButton>
          )}

          <IconButton
            onClick={hancleClickCurrentLoc}
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              zIndex: 44,
              bgcolor: "#fff",
              border: "1px rgba(19, 196, 214, 1) solid",
              color: "rgba(19, 196, 214, 1)",
              m:2,
              mb: 8,
              
              "&:hover": {
                color: "#Fff",
                border: "1px rgba(19, 196, 214, 1) solid",

                bgcolor: "rgba(19, 196, 214, 1)",
                filter: "drop-shadow(0px 0px 0px #777)",
              },
            }}
          >
            <GpsFixedIcon />
          </IconButton>
      {/* <Typography id="popup" sx={{ fontSize: "2rem", color: "#11c981" }}>
        popup
      </Typography>
      <p id="popup">popup3</p> */}

      {/* <Box sx={{ p: 1 }}   id="mouse-position" >
        <form>
          <label htmlFor="projection">Projection </label>
          <select
            ref={projectionRef}
            id="projection"
            onChange={handleChangeProjection}
            value={projectionValue}
          >
            <option value="EPSG:4326">EPSG:4326</option>
            <option value="EPSG:3857">EPSG:3857</option>
          </select>
          <label htmlFor="precision">Precision</label>
          <input
            id="precision"
            type="number"
            min="0"
            max="12"
            value={precisionValue}
            onChange={handleChangePrecision}
          />
        </form>
      </Box>
      <Button sx={{ p: 1 }} onClick={() => {}}>
        current location btn
      </Button> */}

      <Box
        ref={popupRef}
        sx={{
          display: `${showPopup ? "flex" : "none"}`,
          // filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, 1) )",
          // display: showPopup ? "block" : "none",
          // bgcolor: "rgba(19, 196, 214, 1)",
          /* rgba(18, 222, 173, 1) */
          /* rgba(18, 175, 118, 1) */
          zIndex: 100,
          backdropFilter: "blur(22px)",
          bottom: "12px",
          right: "0",
          left: "0",
          marginRight: "auto",
          marginLeft: "auto",
          maxWidth: "200px",
          border: "1px solid #c8014b",
          position: "absolute",
          // boxShadow:' 1px 1px 1px 1px #c8014b;',  /* no */
          // p: 2,
          borderRadius: "20px",
          "&::after": {
            content: '""',
            zIndex: 190,
            bottom: 0,
            border: "1px solid #c8014b",

            left: 0,
            // bgcolor: "#33f",
            backdropFilter: "blur(22px)",

            right: 0,
            m: "auto",
            position: "absolute",
            mb: "-10.2px",
            width: "20px",
            height: "20px",
            borderRadius: "0px",
            transform: "rotate(-45deg)",
            clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
          },
        }}
      >
        <Box>
          <IconButton
            onClick={() => {
              {
                map?.removeOverlay(map.getOverlayById(2));
                console.log("sdadsadadwd2222");
                console.log(map.getOverlayById(2));
                // overlay.setPosition(undefined);
                // closer.blur();
                // return false;
              }
            }}
            sx={{
              borderRadius: "50px",
              position: "absolute",
              top: 0,
              left: 0,
              display: "flex",
              m: ".3rem .3rem 0 ",
              p: 0.5,
            }}
          >
            <CloseIcon
              fontSize="small" /* sx={{color:'rgba(18, 175, 118, 1)'}} */
              sx={{ pointerEvents: "none" }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            // overflow: "auto",
            ml: 4,
            mr: 2,
            mt: 1,
            mb: 1,
            zIndex: 101,
            maxHeight: "150px",
            minHeight: "20px",
          }}
        >
          <Typography>
            {adressFromNeshan ? (
              adressFromNeshan?.formatted_address /* +
                " , " +
                adressFromNeshan?.county +
                " ," +
                adressFromNeshan?.district +
                " ," +
                adressFromNeshan?.neighbourhood +
                " ," +
                adressFromNeshan?.place */
            ) : (
              <CircularProgress
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  margin: "auto",
                  zIndex: 44,
                  color: "rgba(19, 196, 214, 1)",
                }}
              />
            )}
          </Typography>
        </Box>
      </Box>

    </>
  );
};

export default MapComp;
