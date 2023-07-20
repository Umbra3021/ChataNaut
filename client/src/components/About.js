import React from "react";
import { Link } from "react-router-dom";
import {AiFillGithub,AiFillLinkedin,AiFillAndroid} from "react-icons/ai";

const About = () =>{
    return(
        <div>
            <h1 className="abouth1">ABOUT</h1>
            <h2 className="abouth2">Hi I'm Abhishek Sengupta <br/>I'm pursuing my B.Tech in Computer Science and Communication Engineering <br/>Aspiring to be a Better Dev than I was Yesterday <br/></h2>
            <h2 className="abouth2">Visit the Links to get to Know more about me</h2>
            <h2 className="abouth2">This is one of my Projects</h2>
            <div className="parent">
                <h4><Link to="https://github.com/Umbra3021" className="git"><AiFillGithub size={150}/></Link></h4>
                <h4><Link to="https://www.linkedin.com/in/abhishek-sengupta-32ab7023b/?originalSubdomain=in"><AiFillLinkedin size={150}></AiFillLinkedin></Link></h4>
                <h4><Link to="/hidden" className="andr"><AiFillAndroid size={150}/></Link></h4>
            </div>
        </div>
    )
}

export default About;