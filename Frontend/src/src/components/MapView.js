import React, { useEffect, useState } from 'react'
import Map, { Marker } from "react-map-gl";
import { useNavigate } from 'react-router-dom';
import "mapbox-gl/dist/mapbox-gl.css";
import axios from 'axios';

const MapView = () => {
  const [currentLocation, setCurrentLocation] = useState({ latitude: null, longitude: null });
const [data,setData] = useState([]);
const [selected,setSelected] = useState();
var [user,setUser] = useState([]);
useEffect(()=>
{
getCurrentLocation();
axios.get("http://localhost:3005/view")
.then(response =>{
console.log(response.data)
setData(response.data) })
.catch(err=>console.log(err))
},[])

const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
};

// useEffect(() => {
  
// }, []);

  const MAPBOX_TOKEN ="pk.eyJ1Ijoic2ltbW1wbGUiLCJhIjoiY2wxeG1hd24xMDEzYzNrbWs5emFkdm16ZiJ9.q9s0sSKQFFaT9fyrC-7--g";


  return (
    
    <div style={{height:'100vh',width:'100vw'}} >
      {selected && 
<div style={{backgroundColor:'white',color:'black',zIndex:'999',position:'absolute',marginTop:'100px',borderRadius:'20px',height:'50vh',width:'20em'}}>

    <div style={{
  display: 'flex',
  marginTop: '10px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight:'0px'
}}>
    <div>
    <img src={`data:image/jpeg;base64,${selected.image}`} alt="User" style={{ maxWidth: '300px', maxHeight: '100px',alignItems:'center'}} />
    </div>
    <h4>Name : {selected.restuarant}</h4>
    <h4>TYPE : {selected.type}</h4>
    <h4>PLACE : {selected.district}</h4>
    <h4>CONTACT NO : {selected.contactno}</h4>
    </div>
</div>}
      <Map
          initialViewState={{
            latitude: 10.5276, // Latitude of Thrissur, Kerala
            longitude: 76.2144, // Longitude of Thrissur, Kerala
            zoom: 10, // Adjust zoom level as needed
            bearing: 0,
          }}
          // ref={mapRef}
          style={{ width: "100vw", height: "100vh" }}
          mapStyle={"mapbox://styles/mapbox/light-v11"}
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          {data.map((item, index) => (
         <Marker latitude={parseFloat(item.latitude)} longitude={parseFloat(item.longitude)} onClick={()=>{
          setSelected(item);
          console.log("blaaa")
         }}>
  <div style={{ color: 'red', fontSize: 24,zIndex: 999 }}>
    <span role="img" aria-label="marker">📍</span>
  </div>
</Marker>))}
        </Map>

    </div>
  )
}

export default MapView