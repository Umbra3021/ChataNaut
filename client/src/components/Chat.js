import React, { useEffect,useState } from "react";
import {useNavigate} from 'react-router-dom';
let x = "User Must be Logged in";


const Chat = () =>{

    const history=useNavigate();
    const [Data,setData] = useState({});

    const callchat = async () =>{
        try{
            const res = await fetch('https://chatanaut.onrender.com/chat',{
                method:"GET",
                credentials:"include",
                headers:{
                    Accept:"application/json",
                    "Contet-Type":"application/json"
                }
            });

            const data = await res.json();
            console.log(data);
            setData(data);
            x="Welcome"


             if(!res.status ===200){
                const error = new Error(res.error);
                throw error;
            }
        }

        catch(error){
            console.log(error);
            history("../signin",{replace:true})

        }
    }

    useEffect(() =>{
            callchat();
    }, [])



    return(
        <div>
            <h1>{x}</h1>

            <form method="GET">
                <h1>{Data.name}</h1>
            </form>
        </div>
    )
}

export default Chat;