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
    console.log(map.getZoom());
    console.log(map.getMapTypeId());
    if (map.getZoom()! > 15) {
      //high number means zooming in. Swap to satellite + markers (hybrid)
      map.setMapTypeId("hybrid");
    } else {
      //show b/w map
      map?.setMapTypeId("roadmap");
    }
  }

  useEffect(() => {
    let zoomListener: google.maps.MapsEventListener | null = null;
    if (data.longitude && data.latitude) {
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
            zoomListener = map.addListener("zoom_changed", () =>
              changeZoom(map)
            );
          })
          .catch((error) => console.log(error));
      }
    }
    return () => {
      if (zoomListener) {
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
            className="h-[40vh] w-full z-[100] mt-1  rounded-xl"
          />
          <div className="bg-white text-[0.50rem] tracking-widest leading-none text-center">
            zoom-in and out to change map style
          </div>
        </div>
      ) : (
        <div className="h-[50vh] w-full z-[100] flex justify-center items-center border-2 rounded-xl mt-1 bg-white text-center px-10">
          {" "}
          maps are not available for this brewery
        </div>
      )}
    </>
  );
}
