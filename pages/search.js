import React,{useState} from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"



const Search = () => {

    const [pickupLocation, setPickupLocation] = useState();
    const [dropoffLocation, setDropoffLocation] = useState();
    return (
        <Wrapper>

            {/* Button Container */}
            <Link href="/" passHref>
                <ButtonContainer>
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </ButtonContainer>
            </Link>
            
            
            {/* Input Container */}
            <InputContainer>
                {/* Circle Things */}
                <FromToIcons>
                    <Circle src=" https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
                </FromToIcons>

                {/* Input Boxes */}
                <InputBoxes>
                    <Input placeholder="Enter pickup location" value={pickupLocation} onChange={(event)=>setPickupLocation(event.target.value)}  />
                    <Input placeholder="Where to?" value={dropoffLocation} onChange={(event)=> setDropoffLocation(event.target.value)} />
                </InputBoxes>
                
                
                {/* Plus Section */}
                <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
            </InputContainer>


            {/* Saved Places */}
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"></StarIcon>
                Saved Places
            </SavedPlaces>


            {/* Confirm Location */}
            <Link passHref href={
               {
                   pathname: "/confirm",
                   query: {
                       pickupLocation: pickupLocation,
                       dropoffLocation: dropoffLocation
                   }
               } 
            }>
                <ConfirmLocation>Confirm Locations</ConfirmLocation>
            </Link>
            
        </Wrapper>
    )
}

export default Search



const Wrapper = tw.div`
    h-screen
    bg-gray-200
`



const ButtonContainer = tw.div`
    bg-white
    px-4
`


const BackButton = tw.img`
    h-12
    cursor-pointer
`


const InputContainer = tw.div`
    bg-white
    flex items-center
    px-4
    mb-2
`


const FromToIcons = tw.div`
    flex flex-col items-center
    w-10
    mr-3
`


const Circle = tw.img`
    h-2.5
`


const  Line = tw.img`
    h-10
`

const Square = tw.img`
    h-3
`


const InputBoxes = tw.div`
    flex flex-col flex-1
`

const Input = tw.input`
    h-10
    bg-gray-200
    my-2
    rounded-2xl p-2
    outline-none border-none
`


const PlusIcon = tw.img`
    w-10 h-10
    bg-gray-200
    rounded-full
    ml-3
`



const SavedPlaces = tw.div`
    flex  items-center
    bg-white
    px-4
`



const StarIcon = tw.img`
    bg-gray-400
    w-10 h-10
    p-2
    rounded-full
    mr-4
`



const ConfirmLocation = tw.div`
    bg-black text-white
    text-center
    mx-4 my-2
    p-2
    cursor-pointer
`
