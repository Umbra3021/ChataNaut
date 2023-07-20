import React from "react";
import {Link} from "react-router-dom";
import { BsFillEmojiNeutralFill} from "react-icons/bs";
import {FcRight} from "react-icons/fc";

const Hidden =() =>{
    return(
        <div>
            <div className="hid">
                <h1>Needed to Add one more link <br/><br/>
                So... I created one<br/><br/>
                Sorry <BsFillEmojiNeutralFill size={50}/></h1>
            </div>
            <div className="back">
                <p><Link to="/"><FcRight size={150}/></Link></p>
            </div>
        </div>
    )
}

export default Hidden;