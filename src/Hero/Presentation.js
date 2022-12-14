import { useEffect } from "react";
import { FaGitlab, FaGithub, FaArrowDown } from "react-icons/fa";

const Presentation = ({theme}) => {
    useEffect(() => {
        const observerForAnimatedText = new IntersectionObserver((entries, setScrollAmount) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add("animate-subtitle");
                } else {
                    entry.target.classList.remove("animate-subtitle");
                }
            })
        })
        observerForAnimatedText.observe(document.querySelector(".subtitle"))
    }, [])

    return (
        <section id="top" className="Presentation section">
            
            <h1 className="Presentation__header heading-primary">
                <img className="Presentation__pp" src="./img/pp.jpg"/>
                Self taught developer<br/>
                    <div className="heading-subtitle subtitle"> with high sensitivity for UI/UX</div>
                    <div className="heading-subtitle-mobile"> with high sensitivity for UI/UX</div>
            </h1>
            <p className="Presentation__text">
            Contact me for Front-end development (NextJS, ReactJS), custom CRM, plugins, integration, API and more!
            </p>
            <div className="Presentation__actions">
                <a href="#projects" className="button view-projects">View my projects</a>
                <a href="#AboutMe" className="button button-outline contact">More about me</a>
                <div className="Presentation__gits">
                    <a href="https://github.com/mickael00x" className="github">
                        <FaGithub /> 
                        <span>Github</span>
                    </a>
                    <a href="https://gitlab.com/mickael.dev" className="gitlab">
                        <FaGitlab /> 
                        <span>Gitlab</span>
                    </a>
                </div>
            </div>
            <a href="#stack" className="Presentation__scrollDown">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <FaArrowDown />
            </a>
            <div className={"Presentation__background " + theme}>
                <div className="round"></div>
                <div className="round"></div>
                <div className="round"></div>
                <div className="round"></div>
            </div>
        </section>
    );
}

export default Presentation;