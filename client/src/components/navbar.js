import react from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import {FcHeadset} from "react-icons/fc";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light nav">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">ChatAnaut</Link>
            <FcHeadset size={70}/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/chat">Chat</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/signup">Registration</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/signin">Sign-In</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
        </div>
    </div>
    </nav>
 </div>
    )
}

export default Navbar;
