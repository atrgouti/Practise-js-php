import "./mySkillsStyles.css"
import html from "../Photos/skillIcons/html.png"
export default function MySkills(){
    return(
        <div className="containerSkills">
            <p className="aboutme">Skills<span>()</span></p>
            <div className="wrapper">
                <div className="left">
                    <div className="box">
                        <img src={html} alt="" />
                    </div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
                <div className="right">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </div>
        </div>
    )
}