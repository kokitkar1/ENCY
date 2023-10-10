import React, { useEffect, useState } from "react";
import ChatListHeader from "./ChatListHeader.jsx";
import SearchBar from "./SearchBar.jsx";
import List from "./List.jsx";
import { useStateProvider } from "@/context/StateContext.jsx";
import ContactsList from "./ContactsList.jsx";

function ChatList() {

  const [{contactsPage}] = useStateProvider()
  const [pageType,setPageType] = useState("default")

  useEffect(()=>{
    if(contactsPage){
      setPageType("all-contacts")
    }else{
      setPageType("default")
    }
  },[contactsPage])



  return <div className="flex bg-panel-header-background flex-col max-h-screen z-20 "> 
  {pageType === 'default' && (
      <>
          <ChatListHeader />
          <SearchBar />
          <List />
        </>
    )}{
      pageType === "all-contacts" && <ContactsList />
    }
  </div>;
}

export default ChatList;
