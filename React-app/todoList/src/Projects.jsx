import "./projectsStyle.css"
import weatherProject from "../Photos/weatherProject.png"
import blogrProject from "../Photos/blogrProject.png"
import dashboardProject from "../Photos/dashboardProject.png"
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
                <div className="infos">
                    <h1>Blogr</h1>
                    <p>Introducing Blogr, a visually stunning and user-friendly Modern Publishing Platform. Created using HTML, CSS, and JavaScript, this platform combines elegant design with powerful functionality. With Blogr, bloggers can effortlessly create and customize captivating content, while readers enjoy an immersive experience exploring a wide range of topics. Join the vibrant blogging community on Blogr and unleash your creativity in the world of beautifully crafted web pages.</p>
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

            <div className="project germanigo">
                <img src={dashboardProject} alt="" />
                <div className="infos">
                    <h1>Germanigo</h1>
                    <p>Germanigo is a captivating language learning website featuring a responsive landing page and beautifully designed signup/login pages. Created using HTML, vanilla CSS, and JavaScript, the frontend offers an intuitive and visually appealing experience. With seamless functionality powered by PHP and MySQL, Germanigo provides a comprehensive platform for learning German. The stunning dashboard tracks progress, displays mastered words, and offers a range of useful features.</p>
                    <span className="technologies">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>PHP</p>
                        <p>MySql</p>
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
        </div>
    )
}