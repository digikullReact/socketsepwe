
import React,{useEffect,useState} from 'react'
import { io } from "socket.io-client";

const Chat = () => {
    const [socket,setSocket]=useState();
    const [message,setMessage]=useState("");

    const sendMessage=()=>{
        socket.emit("send",message)


    }

    useEffect(()=>{
        const socketConn = io("http://localhost:8080");
        setSocket(socketConn);
        socketConn.on("chat",(data)=>{
            console.log(data);
        
         //console.log(data);
        })
    
      
    
    },[])
  return (
    <div>

      <input type='text' onChange={(event)=>setMessage(event.target.value)}/>

      <button onClick={sendMessage}>
        Send Message

      </button>

    </div>
  )
}

export default Chat