import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl';


function Tmap() {

    // const [viewport, setViewport] = useState({
    //     latitude: -1.236561,
    //     longitude: 36.898133,
    //     width: "100vw",
    //     height: "100vh",
    //     zoom: 14, 
    // })
  return (
    <ReactMapGL 
    // {...viewport}
    mapStyle={"mapbox://styles/elviskim18/cl8y9itdl00re14oblugukpmy"}
    // mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    style={{width: 1300, height: 1000, margin: 50}}
    >

    </ReactMapGL>
  )
}

export default Tmap
