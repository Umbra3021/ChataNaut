import React,{useState} from "react";
import {ImUserTie ,ImDatabase} from "react-icons/im";
import { NavLink ,useNavigate } from "react-router-dom";

const Login = () =>{

    const history = useNavigate();

    const[email,setemail]=useState("");
    const[pass,setpass] =useState("");
    

    const log = async (e) => {
        e.preventDefault();
        const res = await fetch('https://chatanaut.onrender.com/signin',{
            method:"POST",
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:pass,
            })
        });
        const data =res.json();

        if(res.status ===400 || !data){
            window.alert("Invalid");
        }
        else{
            window.alert("Succesfull");
            history("/");
        }
    }
 
    return(
        <div>
        <h1 className="signh1">SIGN-IN</h1>
        <div className="parent">
            <div className="login">
                <form method="POST">
                    <label className="signicon"><ImUserTie size={60} /> </label>
                    <input type="text" placeholder="Email" name="email" autoComplete="off" value={email} onChange={(e)=> setemail(e.target.value)}/>
                    <br />
                    <label className="signicon con2"><ImDatabase size={50} /> </label>
                    <input type="password" placeholder="Password" name="password" autoComplete="off" value={pass} onChange={(e)=> setpass(e.target.value)}/>
                    <br/>
                    <br/>
                    <button type="submit" className="signbutton" value="log" onClick={log}>Login</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Login;