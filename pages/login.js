import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import {useRouter} from "next/router"
import {signInWithPopup, onAuthStateChanged} from "firebase/auth"
import {auth, provider} from "../firebase"


function Login() {


    const router = useRouter();

    useEffect(()=>
    {
        onAuthStateChanged(auth, user =>
        {
            if(user)//user exists
            {
                //send to home page
                router.push("/");
            }
        });
    }, []);


    return (
        <Wrapper>
            
            <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />

            <Title>Login to access your account</Title>

            <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
            
            <SignInButton onClick={()=> signInWithPopup(auth, provider)}>Sign in with Google</SignInButton>
        </Wrapper>
    )
}

export default Login



const Wrapper = tw.div`
    flex flex-col h-screen w-screen
    bg-gray-200
    p-4
`


//object-contain adjustes resolution to keep quality of the image
//self-start just like flex start, so that the image is at the start of the page
const UberLogo = tw.img`
    h-10 w-auto object-contain
    self-start
`


const Title = tw.div`
    text-4xl
    pt-4
    text-gray-500
`


const HeadImage = tw.img`
    object-contain w-full
`


const SignInButton = tw.div`
    bg-black text-white
    text-center
    py-4 mt-8
    w-full
`