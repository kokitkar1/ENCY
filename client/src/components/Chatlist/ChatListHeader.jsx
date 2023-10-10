import React from "react";
import Avatar from "../common/Avatar.jsx";
import { useStateProvider } from "@/context/StateContext.jsx";
import {BsFillChatLeftTextFill, BsThreeDotsVertical} from 'react-icons/bs'
import { reducerCases } from "@/context/constants.js";

function ChatListHeader() {

  const [{userInfo},dispatch] = useStateProvider()

  const handleAllContactsPage = () => {
    dispatch({type : reducerCases.SET_ALL_CONTACTS_PAGE})
  }



  return <div className="h-16 px-4 py-3 flex justify-between items-center">
      <div className="cursor-pointer">
        <Avatar type="sm" image={userInfo?.profileImage} />
      </div>
      <div className="flex gap-6">
        <BsFillChatLeftTextFill className="text-xl text-panel-header-icon cursor-pointer" title="New Chat"  onClick={handleAllContactsPage}/>
        <>
        <BsThreeDotsVertical className="text-xl text-panel-header-icon cursor-pointer" title="Menu" /> 
        </>
      </div>
  </div>;
}

//03.06.37

export default ChatListHeader;
