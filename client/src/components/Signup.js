import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import { FaCircleUser} from "react-icons/fa6";
import {AiOutlineMail,AiOutlineKey,AiFillPhone} from "react-icons/ai";
import astro from "../images/astronaut.jpg";

const Signup = () =>{
    const history = useNavigate();
    const [user,set]=useState({
        name:"",email:"",phone:"",password:"",cpassword:""
    });
    let name,value;
    const events=(e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        set({...user,[name]:value});
    }

    const Pass = async (e) =>{
        e.preventDefault();

        const {name,email,phone,password,password2} = user;
        
        const res = await fetch("https://chatanaut.onrender.com/register",{

        credentials: "include", 
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                email:email,
                phone:phone,
                password:password,
                password2:password2
            })
        });
        const data= await res.json();

        if(data.status ===422){
            window.alert("Invalid");
            console.log("Invalid");
        }
        else{
            window.alert("Completely Successfully");
            console.log("Done");

            history("../signin",{replace:true});

        }
    }


    return(
        <div className="parent">
            <div className="contain">
                <h1>REGISTRATION</h1>
                <form className="forms" method="POST">
                    <label className="Signupicon"> <FaCircleUser size={50}/></label>
                    <input type="text" placeholder="Name" name="name"autoComplete="off" value={user.name} onChange={events}/>
                    <br />
                    <label className="Signupicon"> <AiOutlineMail  size={50}/></label>
                    <input type="text" placeholder="Email" name="email"autoComplete="off" value={user.email} onChange={events}/>
                    <br />
                    <label className="Signupicon"> <AiFillPhone size={45}/></label>
                    <input type="text" placeholder="Phone" name="phone"autoComplete="off" value={user.phone} onChange={events}/>
                    <br />
                    <label className="Signupicon"> <AiOutlineKey  size={50}/></label>
                    <input type="password" placeholder="Password" name="password" autoComplete="off" value={user.password} onChange={events}/>
                    <br />
                    <label className="Signupicon"> <AiOutlineKey  size={50}/></label>
                    <input type="password" placeholder="Confirm Password" name="password2" autoComplete="off" value={user.password2} onChange={events}/>
                    <br />
                    <br />
                    <button type="submit" className="signupbutton" value="registe" onClick={Pass}>Submit</button>
                </form>
                <img src={astro} alt="logo" width={300} className="img"></img>
            </div>
        </div>
    )
}

export default Signup;