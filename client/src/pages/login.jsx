import React from "react";
import Image from "next/image";
import {FcGoogle} from 'react-icons/fc'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig.js";
import axios from "axios";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes.js";
import { useRouter } from "next/router.js";
import { useStateProvider } from "@/context/StateContext.jsx";
import { reducerCases } from "@/context/constants.js";

function login() {

  const router = useRouter()
  const [{},dispatch] = useStateProvider()

  const handleLogin = async() =>{
    const provider = new GoogleAuthProvider()
    const {user : { displayName:name,email,photoURL:profileImage}} = await signInWithPopup(firebaseAuth, provider)
    try {
      if(email){
        const {data} = await axios.post(CHECK_USER_ROUTE, { email })

        if(!data.status){
          dispatch({ type : reducerCases.SET_NEW_USER, newUser:true})
          dispatch({
              type : reducerCases.SET_USER_INFO, userInfo:{
                name,email,profileImage,status:"",
              }
            })
          router.push("/onboarding")
        }
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  return <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6" >
    <div className=" flex items-center justify-center gap-2 text-white" >
      <Image src="/whatsapp.gif" alt="Whatapp" height={300} width={300} />
      <span className="text-7xl" >Whatsapp</span>
    </div>
    <button className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg" onClick={handleLogin} >
      <FcGoogle className="text-4xl" />
      <span className="text-white text-2xl">Login with Google</span>
    </button>
  </div>;
}

export default login;
