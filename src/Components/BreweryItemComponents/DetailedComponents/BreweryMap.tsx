import { useEffect, useRef } from "react";
import { BreweryType } from "../../../assets/interfaces";
import { Loader } from "@googlemaps/js-api-loader";

export default function BreweryMap({ data }: { data: BreweryType }) {
  const ref = useRef(null);
  console.log(data.latitude, data.longitude);
  const LatLng = {
    lat: parseFloat(data.latitude),
    lng: parseFloat(data.longitude),
  };

  useEffect(() => {
    if (data.latitude && data.longitude) {
      const loader = new Loader({
        apiKey: "AIzaSyDUGBBGWpyVDCNkHfuk4zWZII_cMCg-dtI",
        version: "weekly",
      });

      let map: google.maps.Map;
      loader
        .importLibrary("maps")
        .then(() => {
          map = new google.maps.Map(document.getElementById("map")!, {
            center: LatLng,
            mapId: "ea6a8cce6ff39ab8",
            zoom: 15,
            gestureHandling: "greedy",

            minZoom: 10,
            zoomControl: false, //allow zoom + and - buttons
            mapTypeControl: true, //allows switch between map style
            streetViewControl: false, //allows streetView
            fullscreenControl: false, //allows see in full screen
            keyboardShortcuts: false, //allows a tag for keyboards
          });

          new google.maps.Marker({
            position: LatLng,
            map,
            title: data.name,
          });
        })
        .catch((error) => console.log(error));
    }
  }, []);
  return <div ref={ref} id="map" className="h-[50vh] w-full z-[100]"></div>;
}
