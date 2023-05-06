import logo from "../Photos/logo.svg"
import linkdlen from "../Photos/linkdlen.svg"
import "./Navbarstyle.css"
export default function NavBar(){
    return(
        <div className="container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Skills</a>
                </li>
                <li>
                    <a href="#">Projects</a> 
                </li>
            </ul>
            <div className="contact">
                <img src={linkdlen} alt="" />

            </div>
        </div>
    );
};