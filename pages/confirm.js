//rafce - React Arrow Function Component

import {React,useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import Map from "./components/Map"
import { Router, useRouter } from 'next/dist/client/router'
import RideSelector from "./components/RideSelector"
import Link from 'next/dist/client/link'




const Confirm = () => {

    const [pickupCoordinate, setPickupCoordinate] = useState();
    const [dropoffCoordinate, setDropoffCoordinate] = useState();
    

    //Query URL parameters
    const router = useRouter();
    const {pickupLocation, dropoffLocation} = router.query


    const getPickupCoordinates = (location)=>
    {
        //calling an api
        //https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` + 
            new URLSearchParams(
                {
                    access_token: "pk.eyJ1IjoiYW5kaWxlbmljb2xhczZzb2Z0d2FyZWVuZ2luZWVyIiwiYSI6ImNrdnhucWhlazAzMWEycG12MXh6bHU5dXgifQ.9UjQ6j5FL8bmJh0_E36N-w",
                    limit: 1 //since it returns a lot more data, and only 1 is needed
                })
        )
        .then((response)=>
        {
            return response.json();
        })
        .then((data)=>
        {
            setPickupCoordinate(data.features[0].center);
        });

    }


    const getDropoffCoordinates = (location)=>
    {
        //calling an api
        //https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` + 
            new URLSearchParams(
                {
                    access_token: "pk.eyJ1IjoiYW5kaWxlbmljb2xhczZzb2Z0d2FyZWVuZ2luZWVyIiwiYSI6ImNrdnhucWhlazAzMWEycG12MXh6bHU5dXgifQ.9UjQ6j5FL8bmJh0_E36N-w",
                    limit: 1 //since it returns a lot more data, and only 1 is needed
                })
        )
        .then((response)=>
        {
            return response.json();
        })
        .then((data)=>
        {
            setDropoffCoordinate(data.features[0].center);    
        });

    }



    useEffect( ()=> 
    {
        if(pickupLocation)
        {
            getPickupCoordinates(pickupLocation);
        }

        if(dropoffLocation)
        {
            getDropoffCoordinates(dropoffLocation);
        }

    }, [pickupLocation, dropoffLocation]);




    return (
        <Wrapper>


            {/* Button Container */}
            <Link href="/search" passHref>
                <ButtonContainer>
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </ButtonContainer>
            </Link>

            
            <Map
                pickupCoordinate={pickupCoordinate}
                dropoffCoordinate={dropoffCoordinate}
             />
    
            <RideContainer>

                {/* Ride Selector */}
                <RideSelector
                    pickupCoordinate={pickupCoordinate}
                    dropoffCoordinate={dropoffCoordinate}
                    />


                {/* Confirm Button */}
                <ConfirmButtonContainer>                
                    <ConfirmButton>Confirm UberX</ConfirmButton>
                </ConfirmButtonContainer>
            
            </RideContainer>

        </Wrapper>
    )
}

export default Confirm



const Wrapper = tw.div`
    flex flex-col
    h-screen
`

const RideContainer = tw.div`
    flex-1 flex flex-col
    h-1/2
`


const ConfirmButtonContainer = tw.div`
    border-t-2
`

const ConfirmButton = tw.div`
    bg-black
    text-white
    text-center
    text-xl
    m-4 py-4
`

// px-4
const ButtonContainer = tw.div`
    flex
`

// h-12
// cursor-pointer

const BackButton = tw.img`
    w-12
    h-12'
    rounded-full
    z-0
`
