import React,{useEffect,useState} from 'react'
import { io } from "socket.io-client";

export const Socket = () => {
  const [socket,setSocket]=useState();
  const [realtimeData,setRealTimeData]=useState([]);
const handleClick=()=>{

  // emit an event 
  socket.emit("realtime","Send Me Realtime Updates")


}

useEffect(()=>{
    const socketConn = io("http://localhost:8080");
    setSocket(socketConn);
    socketConn.on("message",(data)=>{
      setRealTimeData([...realtimeData,data])
     //console.log(data);
    })

  

},[])

  return (
    <div>

     <button onClick={handleClick}>

         Click Me to Get Realtime Updates
     </button>
     
     {
      realtimeData.map(ele=>(
        <li>{ele.name} {ele.email} </li>
      ))
     }


    </div>
  )
}
