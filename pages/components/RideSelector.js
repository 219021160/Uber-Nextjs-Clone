import React,{useEffect, useState} from 'react'
import tw from "tailwind-styled-components"

import {carList} from "../data/carList"



const RideSelector = (props) => {


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
                                <CarPrice>R31</CarPrice>
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

