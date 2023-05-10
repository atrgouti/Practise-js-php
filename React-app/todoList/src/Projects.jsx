import "./projectsStyle.css"
import weatherProject from "../Photos/weatherProject.png"
import blogrProject from "../Photos/blogrProject.png"
import githubIcon from "../Photos/githubIcon.png"
import liveDemo from "../Photos/liveDemo.png"
export default function Projects(){
    return(
        <div className="projectsContainer">
            <p className="aboutme">Projects<span>()</span></p>
            <div className="project">
                <img src={weatherProject} alt="" />
                <div className="infos">
                    <h1>Weather App</h1>
                    <p>Introducing a user-friendly weather app created using simple HTML, CSS, and JavaScript, along with a powerful weather API. This app allows you to check the weather in any city with ease. Just enter the name of the city you're interested in, and the app will quickly fetch real-time weather information for you. The interface is designed to be visually pleasing and easy to understand, displaying the current temperature, humidity, wind speed, and other important weather details.</p>
                    <span className="technologies">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JAVASCRIPT</p>
                    </span>
                    <span className="allLinks">
                        <div className="linksGit">
                            <p>Code</p>
                            <img src={githubIcon} alt="" />
                        </div>
                        <div className="linksLive">
                            <p>Live Demo</p>
                            <img src={liveDemo} alt="" />
                        </div>
                    </span>
                </div>
            </div>
            <div className="project">
                <img src={blogrProject} alt="" />
                <div className="infos"></div>
            </div>
            <div className="project">
                <img src={weatherProject} alt="" />
                <div className="infos"></div>
            </div>
            {/* <div className="project">
                <div className="photo">
                    <img src={blogrProject} alt="" />
                </div>
                <div className="infos"></div>
            </div> */}
        </div>


    )
}