import "./MainSectionStyle.css"
// import MyNameLogo from "../Photos/"
import MyNameLogo from "../Photos/MyNameLogo.svg"
export default function MainSection(){
    return(
        <div className="MainContainer">
            <div className="content">
                <h1>Hello, I am</h1>
                <img src={MyNameLogo} alt="" />
                <h2>Software Engineer</h2>
            </div>
        </div>
    )
}