import "./MainSectionStyle.css"
// import MyNameLogo from "../Photos/"
import MyNameLogo from "../Photos/MyNameLogo.png"
import download from "../Photos/download.png"
import main from "../Photos/main.svg"
export default function MainSection(){
    return(
        <>
        <div className="MainContainer">
            <div className="content">
                <h1>Hello, I am</h1>
                <img className="mynamelogo" src={MyNameLogo} alt="" />
                <h1 className="software">Software Engineer</h1>
                <span className="resume">
                    <a href=""><img src={download} alt="" /></a>
                    <a href=""><p>Resume</p></a>
                </span>
            </div>
            <div className="me">
                <img src={main} alt="" />
            </div>
        </div>
        <div className="lineOrange"></div>
        </>
    )
}