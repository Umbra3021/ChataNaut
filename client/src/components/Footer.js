import React from "react";

const date=new Date();
const year= date.getFullYear();

const Footer = () =>{
    return(
        <div className="foot">
            <footer>
            <h4>Created by Abhishek Copyright©{year}</h4>
            <h6>Visit my GitHub <a href="https://github.com/Umbra3021">Umbra</a></h6>
            <br />            <a href="https://www.freepik.com/free-vector/cute-astronaut-working-with-laptop-space-cartoon-vector-icon-illustration-science-technology_42161336.htm#query=cartoon%20astronaut&position=9&from_view=keyword&track=ais">Image by catalyststuff</a> on Freepik
            </footer>
        </div>
    );
}

export default Footer;