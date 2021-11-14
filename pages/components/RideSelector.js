import React,{useEffect, useState} from 'react'
import tw from "tailwind-styled-components"

import {carList} from "../data/carList"



const RideSelector = ({pickupCoordinate, dropoffCoordinate}) => {

    let pickupX = 0;
    let pickupY = 0;

    let dropoffX = 0;
    let dropoffY = 0;

    if(pickupCoordinate && dropoffCoordinate)
    {
        console.log("Pickup coordinate: ");
        pickupCoordinate.map((value, index) => {
            
            if(index === 0)
            {
                console.log("pickupX");
                pickupX = value;
                console.log(pickupX);
            }else if(index === 1)
            {
                console.log("pickupY");
                pickupY = value;
                console.log(pickupY);
            }
        });


        console.log("Dropoff coordinate: ");
        dropoffCoordinate.map((value, index) => {
            
            if(index === 0)
            {
                console.log("dropoffX");
                dropoffX = value;
                console.log(dropoffX);
            }else if(index === 1)
            {
                console.log("dropoffY");
                dropoffY = value;
                console.log(dropoffY);
            }
        });
    }

    const [duration, setDuration] = useState(0);

    useEffect(()=>
    {
        console.log("Fetching duration from API");
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupX},${pickupY};${dropoffX},${dropoffY}?access_token=pk.eyJ1IjoiYW5kaWxlbmljb2xhczZzb2Z0d2FyZWVuZ2luZWVyIiwiYSI6ImNrdnhucWhlazAzMWEycG12MXh6bHU5dXgifQ.9UjQ6j5FL8bmJh0_E36N-w`)
        .then( response =>
            {
                return response.json();
            }
        )
        .then( data =>
            {
                setDuration(data.routes[0].duration/100);
            }
        )
        
    }, [dropoffX, dropoffY, pickupX, pickupY]);

    


    return (
        <Wrapper>
            <Title >Choose a ride or swipe up for more</Title>
        
                       
            <CarList>

                {
                    carList.map((car, index)=>{
                        return (

                            <Car key={index}>
                                <CarImage src={car.imgUrl} />
                                <CarDetails>
                                    <Service>{car.service}</Service>
                                    <Time>5 min away</Time>
                                </CarDetails>
                                <CarPrice>R {(duration * car.multiplier).toFixed(2)}</CarPrice>
                            </Car>

                        )
                    })
                }

            </CarList>
        

        </Wrapper>
    )
}

export default RideSelector


//overflow-y-scroll basically says whatever is inside the div should be scrollable and not the entire page and it should be inside a flex div
const Wrapper = tw.div`
    flex-1 flex flex-col
    overflow-y-scroll
`


const Title = tw.div`
    text-center
    text-gray-500
    text-xs
    py-2
    border-b
`


const CarList = tw.div`
    flex flex-col
    overflow-y-scroll
`


const Car = tw.div`
    flex items-center
    p-4
`


const CarImage = tw.img`
    h-14 mr-2
`


const CarDetails =tw.div`
    flex-1
`


const Service = tw.div`
    font-medium
`

const Time = tw.div`
    text-xs text-blue-500
`

const CarPrice = tw.div`
    text-xs
`

