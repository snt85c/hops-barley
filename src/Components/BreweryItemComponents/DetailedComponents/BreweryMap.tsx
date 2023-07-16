import { useEffect, useRef } from "react";
import { BreweryType } from "../../../assets/interfaces";
import { Loader } from "@googlemaps/js-api-loader";

export default function BreweryMap({ data }: { data: BreweryType }) {
  const ref = useRef(null);
  const LatLng = {
    lat: parseFloat(data.latitude),
    lng: parseFloat(data.longitude),
  };

  function changeZoom(map: google.maps.Map) {
    if (map.getZoom()! > 15) {
      map.setMapTypeId("satellite");
    } else {
      map.setMapTypeId("roadmap");
    }
  }

  useEffect(() => {
    if (data.latitude && data.longitude) {
      let zoomListener: any;
      let map: google.maps.Map;
      const loader = new Loader({
        apiKey: "AIzaSyDUGBBGWpyVDCNkHfuk4zWZII_cMCg-dtI",
        version: "weekly",
      });
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
            mapTypeControl: false, //allows switch between map style
            streetViewControl: false, //allows streetView
            fullscreenControl: false, //allows see in full screen
            keyboardShortcuts: false, //allows a tag for keyboards
          });

          new google.maps.Marker({
            position: LatLng,
            map,
            title: data.name,
          });
          if (map)
            zoomListener = map.addListener("zoom_changed", () =>
              changeZoom(map)
            );
        })
        .catch((error) => console.log(error));
      return () => google.maps.event.removeListener(zoomListener);
    }
  }, []);
  return <div ref={ref} id="map" className="h-[50vh] w-full z-[100]"></div>;
}
