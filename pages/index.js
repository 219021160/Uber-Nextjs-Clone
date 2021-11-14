
import tw from "tailwind-styled-components"
import Link from "next/link"

import Image from 'next/image'
import Map from "./components/Map"

export default function Home() {
 
  return (

    <Wrapper>
      
      <Map />


      <ActionItems>
        
        {/* Header */}
        <Header>

          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
                
          <Profile>
            <Name>Username</Name>
            <UserImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
          </Profile>

        </Header>

        {/* ActionButtons */}
        <ActionButtons>
          
          <Link href="/search" passHref>
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
          <ActionButtonImage src=" https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>

        </ActionButtons>
        


        {/* InputButton */}
        <InputButton>

          Where To
          
        </InputButton>


      </ActionItems>

    </Wrapper>
  )
}



const Wrapper = tw.div`
  flex
  flex-col
  h-screen
`



const ActionItems = tw.div`
  flex-1
  p-4
`


const Header = tw.div`
  flex
  justify-between
`


const UberLogo = tw.img`
  h-28 object-contain
`


const Profile = tw.div`
  flex
  items-center
`

const Name = tw.div`
  mr-4 w-20
  text-sm
  `


const UserImage = tw.img`
  h-14 w-14
  rounded-full
  object-contain 
  border-4 border-gray-200 p-px
`



const ActionButtons = tw.div`
  flex
  justify-between
  `



const ActionButton = tw.div`
  flex-1
  flex
  flex-col
  justify-center
  rounded-lg
  bg-gray-200
  m-1 h-32
  items-center
  transform
  hover:scale-105 transition ease-in duration-200
  text-xl
  cursor-pointer
`

const ActionButtonImage = tw.img`
  h-3/5
`





const InputButton = tw.div`
  h-20
  bg-gray-200
  text-2xl
  p-4
  flex item-center
  mt-8
`