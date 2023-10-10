import React from "react";
import ChatListHeader from "./ChatListHeader.jsx";
import SearchBar from "./SearchBar.jsx";
import List from "./List.jsx";

function ChatList() {
  return <div className="flex bg-panel-header-background flex-col max-h-screen z-20 ">
        <>
          <ChatListHeader />
          <SearchBar />
          <List />
        </>
  </div>;
}

export default ChatList;
