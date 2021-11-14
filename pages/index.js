

import {useState, useEffect, useRef} from "react"
import tw from "tailwind-styled-components"
import Link from "next/link"

import Image from 'next/image'
import Map from "./components/Map"

import {auth} from "../firebase"
import {onAuthStateChanged, signOut} from "firebase/auth"

import { useRouter } from "next/dist/client/router"




export default function Home() {


  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(()=>
  {
    //executes when it detects state change to ther user (google object)
    return onAuthStateChanged(auth, user =>
        {
          if(!user)
          {
            setUser(null);
            router.push("/login");
          }else
          {
            setUser(
              {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL
              }
            )
          }

        });

  }, []);
 


  return (

    <Wrapper>
      
      <Map />


      <ActionItems>
        
        {/* Header */}
        <Header>

          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
                
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src={user && user.photoURL} onClick={()=> signOut(auth)} />
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
  mr-4 w-12 md:w-full
  text-sm
  break-all md:break-normal
  `


const UserImage = tw.img`
  h-14 w-14
  rounded-full
  object-contain 
  border-4 border-gray-200 p-px
  cursor-pointer
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