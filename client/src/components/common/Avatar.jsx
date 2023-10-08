import Image from "next/image.js";
import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import ContextMenu from "./ContextMenu.jsx";

function Avatar({type, image, setImage}) {

  const [hover, setHover] = useState(false)
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false)
  const [contextMenuCordinates , setContextMenuCordinates] = useState({x:0,y:0})

  const showContextMenu = (e) =>{
    e.preventDefault();
    setContextMenuCordinates({x:e.pageX, y:e.pageY})
    setIsContextMenuVisible(true)
  }
//1:44:24

  const contextMenuOptions = [
    {name:"Take Photo", callback: ()=> {}},
    {name:"Choose From Library", callback: ()=> {}},
    {name:"Upload Photo", callback: ()=> {}},
    {name:"Remove Photo", callback: ()=> {}}
  ]

  return <>
  <div className="flex items-center justify-center">
    {
      type === "sm" && (
        <div className="relative h-10 w-10">
          <Image src={image} alt="avatar" className="rounded-full" fill />
        </div>
      )
    }
    {
      type === "lg" && (
        <div className="relative h-14 w-14">
          <Image src={image} alt="avatar" className="rounded-full" fill />
        </div>
      )
    }
    {
      type === "xl" && (
        <div className="relative cursor-pointer z-0"  onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>
          <div id="context-opener" className={`z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2  ${hover? "visible" : "hidden"}`} onClick={(e)=>showContextMenu(e)} >
            <FaCamera className="text-2xl" id="context-opener" onClick={(e)=>showContextMenu(e)} />
            <span onClick={(e)=>showContextMenu(e)} id="context-opener" >Change Profile Photo</span>
          </div>
        <div className="flex items-center justify-center h-60 w-60 ">
          <Image src={image} alt="avatar" className="rounded-full" fill />
        </div>
        </div>
      )
    }
  </div>
  {
    isContextMenuVisible && <ContextMenu options={contextMenuOptions} cordinates={contextMenuCordinates} contextMenu={isContextMenuVisible} setContextMenu={setIsContextMenuVisible} />
  }
  </>;
}

export default Avatar;
