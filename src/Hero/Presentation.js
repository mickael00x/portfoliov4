import { useEffect } from "react";
import { FaGitlab, FaGithub } from "react-icons/fa";

const Presentation = () => {
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
        setTimeout(() => {
            observerForAnimatedText.observe(document.querySelector(".subtitle"))
        }, 11000);
    }, [])

    return (
        <section id="top" className="Presentation section">
            <div className="Presentation__background">
                <div className="round"></div>
                <div className="round"></div>
                <div className="round"></div>
                <div className="round"></div>
            </div>
            <div className="Presentation__box">
                <h1 className="Presentation__header heading-primary">Self taught developer<br/>
                        <div className="heading-subtitle subtitle"> with high sensitivity for UI/UX</div>
                        <div className="heading-subtitle-mobile"> with high sensitivity for UI/UX</div>
                </h1>
                <p className="Presentation__text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
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
            </div>
            <div className="Presentation__scrollDown">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </section>
    );
}

export default Presentation;