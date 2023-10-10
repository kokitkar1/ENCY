import { useStateProvider } from "@/context/StateContext.jsx";
import { reducerCases } from "@/context/constants.js";
import { GET_ALL_CONTACTS } from "@/utils/ApiRoutes.js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

function ContactsList() {
  const[allContacts,setAllContacts] = useState([]);
  const[{},dispatch] = useStateProvider();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const {data:{users}} = await axios.get(GET_ALL_CONTACTS);
        setAllContacts(users)
      } catch (error) {
        console.log(error);
      }
    }
  },[])


  return <div className="h-full flex flex-col">
      <div className="h-24 flex items-end px-3 py-4">
          <div className="flex items-center gap-12 text-white">
              <BiArrowBack className=" cursor-pointer text-xl" onClick={() => dispatch({type :reducerCases.SET_ALL_CONTACTS_PAGE})}/>
          </div>
      </div>
  </div>;
}

export default ContactsList;
