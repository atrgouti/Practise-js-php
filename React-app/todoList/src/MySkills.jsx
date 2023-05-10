import "./mySkillsStyles.css"
import html from "../Photos/skillIcons/html.png"
import css from "../Photos/skillIcons/css.png"
import Bootstrap from "../Photos/skillIcons/Bootstrap.png"
import git from "../Photos/skillIcons/git.png"
import javascript from "../Photos/skillIcons/javascript.png"
import laravel from "../Photos/skillIcons/laravel.png"
import mysql from "../Photos/skillIcons/mysql.png"
import php from "../Photos/skillIcons/php.png"
import sass from "../Photos/skillIcons/sass.png"
import typescript from "../Photos/skillIcons/typescript.png"
import reactIcon from "../Photos/skillIcons/reactIcon.png"
export default function MySkills(){
    return(
        <div className="containerSkills">
            <p className="aboutme">Skills<span>()</span></p>
            <div className="wrapper">
                <div className="left">
                    <div className="box">
                        <img src={html} alt="" />
                    </div>
                    <div className="box">
                        <img src={css} alt="" />
                    </div>
                    <div className="box">
                        <img src={javascript} alt="" />
                    </div>
                    <div className="box">
                        <img src={Bootstrap} alt="" />
                    </div>
                    <div className="box">
                        <img src={git} alt="" />
                    </div>
                    <div className="box">
                        <img src={sass} alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="box">
                        <img src={reactIcon} alt="" />
                    </div>
                    <div className="box">
                        <img src={typescript} alt="" />
                    </div>
                    <div className="box">
                        <img src={laravel} alt="" />
                    </div>
                    <div className="box">
                        <img src={mysql} alt="" />
                    </div>
                    <div className="box">
                        <img src={javascript} alt="" />
                    </div>
                    <div className="box">
                        <img src={javascript} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}