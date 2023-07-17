import { useEffect, useRef } from "react";
import { BreweryType } from "../../../assets/interfaces";
import { Loader } from "@googlemaps/js-api-loader";

/**
 * BreweryMap component displays a google map with a marker for a specific brewery.
 * @param data - BreweryType object containing information about the brewery.
 */
export default function BreweryMap({ data }: { data: BreweryType }) {
  const ref = useRef(null);

  const LatLng = {
    lat: parseFloat(data.latitude),
    lng: parseFloat(data.longitude),
  };

  /**
   * changeZoom function changes the map type based on the zoom level.
   * @param map - google.maps.Map object representing the map instance.
   */
  function changeZoom(map: google.maps.Map) {
    if (map.getZoom()! > 15) {
      // High number means zooming in. Swap to satellite + markers (hybrid)
      map.setMapTypeId("hybrid");
    } else {
      // Show black and white map
      map?.setMapTypeId("roadmap");
    }
  }

  useEffect(() => {
    let zoomListener: google.maps.MapsEventListener | null = null;

    //check that the data is present first
    if (data.latitude && data.longitude) {
      const loader = new Loader({
        apiKey: "AIzaSyDUGBBGWpyVDCNkHfuk4zWZII_cMCg-dtI",
        version: "weekly",
      });
      loader
        .importLibrary("maps")
        .then(() => {
          let map = new google.maps.Map(document.getElementById("map")!, {
            center: LatLng,
            mapId: "ea6a8cce6ff39ab8",
            zoom: 15,
            gestureHandling: "greedy",

            minZoom: 10,
            zoomControl: false, // Allow zoom + and - buttons
            mapTypeControl: false, // Allow switch between map styles
            streetViewControl: false, // Allow street view
            fullscreenControl: false, // Allow full screen view
            keyboardShortcuts: false, // Allow keyboard shortcuts
          });

          //create a marker on map
          new google.maps.Marker({
            position: LatLng,
            map,
            title: data.name,
          });

          //add a listener to change the map type on magnification
          zoomListener = map.addListener("zoom_changed", () => changeZoom(map));
        })
        .catch((error) => console.log(error));
    }

    return () => {
      if (zoomListener) {
        //if the listener has been set, remove it
        google.maps.event.removeListener(zoomListener);
      }
    };
  }, []);

  return (
    <>
      {data.latitude && data.longitude ? (
        <div>
          <div
            ref={ref}
            id="map"
            className="h-[40vh] w-full z-[100] mt-1  rounded-xl bg-neutral-300"
          />
          <div className="bg-white text-xs tracking-widest leading-none text-center">
            zoom-in and out to change map style
          </div>
        </div>
      ) : (
        <div className="h-[40vh] w-full z-[100] flex justify-center items-center border-2 rounded-xl mt-1 bg-neutral-200 text-black/60 md:tracking-wider text-center px-10">
          maps are not available for this brewery
        </div>
      )}
    </>
  );
}
