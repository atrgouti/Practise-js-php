import logo from "../Photos/logo.svg"
import linkdlen from "../Photos/linkdlen.svg"
import github from "../Photos/github.svg"
import contact from "../Photos/contact.svg"
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
                <li className="contactLink">
                    <a href="#">Contact</a> 
                </li>
            </ul>
            <div className="contact">
                <img className="linkdlenIcon" src={linkdlen} alt="" />
                <img className="githubIcon" src={github} alt="" />
                <span className="span">
                    <p className="contactMe">Contact Me</p>
                    <img src={contact} alt="" />
                </span>
            </div>
        </div>
    );
};