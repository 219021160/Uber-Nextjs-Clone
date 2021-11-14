import{React, useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from "!mapbox-gl"
import Head from 'next/head'

mapboxgl.accessToken = "pk.eyJ1IjoiYW5kaWxlbmljb2xhczZzb2Z0d2FyZWVuZ2luZWVyIiwiYSI6ImNrdnhucWhlazAzMWEycG12MXh6bHU5dXgifQ.9UjQ6j5FL8bmJh0_E36N-w"


const Map = (props) => {


     // Create a default Marker and add it to the map.
     const addToMap = (map, coordinates) => {
      const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
    };
   

    // RSA 24.6727135 Longitude, -28.4792625 Latitude
    useEffect(() => {     
        const map = new mapboxgl.Map({
        container: "map", // container ID
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph', // style URL
        center: [24.6727135, -28.4792625], // starting position [lng, lat]
        zoom: 4 // starting zoom
        });


        if(props.pickupCoordinate)
        {
          addToMap(map, props.pickupCoordinate)
        }

        if(props.dropoffCoordinate)
        {
          addToMap(map, props.dropoffCoordinate)
        }

        if(props.pickupCoordinate && props.dropoffCoordinate)
        {
          map.fitBounds([
            props.pickupCoordinate, // props.pickupCoordinate
            props.dropoffCoordinate // props.dropoffCoordinate
            ],
            {padding: 60}
            );
        }

      }, [props.pickupCoordinate, props.dropoffCoordinate]); //renders or executes only for the first time since its not listerning for any changes in []
      //listens for changes to the mentioned props and if there are it executes whats in the useEffect


   
      

    return (
        < >
        <Head>
        {/* mapbox styling */}
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
        </Head>

        <Wrapper id="map"></Wrapper>
        </>
        
    )
}

export default Map


const Wrapper = tw.div`
    flex-1 h-1/2
`


// // Create a default Marker and add it to the map.
// const marker1 = new mapboxgl.Marker()
// .setLngLat([12.554729, 55.70651])
// .addTo(map);
 
// // Create a default Marker, colored black, rotated 45 degrees.
// const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
// .setLngLat([12.65147, 55.608166])
// .addTo(map);