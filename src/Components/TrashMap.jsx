
import Map, {Marker, Popup} from 'react-map-gl';

import React, { useState} from 'react';

import { FaTrash } from 'react-icons/fa';


function TrashMap() {
  const [viewport, setViewport] = useState({
    latitude: -1.236561,
    longitude: 36.898133,
    // width: "100vw",
    // height: "100vh",
    zoom: 14, 
  })


//   const [selectedtrash, setselectedtrash] = useState(null);
  return (
    <Map
    {...viewport}
    style={{width: 500, height: 700, margin: 50}}
    mapStyle="mapbox://styles/elviskim18/cl8y9itdl00re14oblugukpmy"
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    onViewportChange={(nextviewport) => setViewport(nextviewport)}>
      

      {/* {data.features.map((trash)=>(
        <Marker key={trash.id} latitude={trash.location.x} longitude={trash.location.y} >
          <button onClick={() =>{
          // e.preventDefault();
          console.log("wee")
      
          setselectedtrash(trash)
          console.log("ouut")
         
        }}>
            <FaTrash />
          </button>
        </Marker>
      ))} */}

      {/* {selectedtrash? (
        <Popup latitude={selectedtrash.location.x} longitude={selectedtrash.location.y}>
          <div>
            tashhh
          </div>
        </Popup>
      ) : null} */}
    </Map>
  
  );
}

export default TrashMap;
