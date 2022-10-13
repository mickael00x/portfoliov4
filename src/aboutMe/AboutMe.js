import { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

const AboutMe = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const aboutMeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                let container = entry.target;
                let image = container.children[0];
                let content = container.children[1];
                if(entry.isIntersecting) {
                    container.classList.add("darker");
                    content.classList.add("showInWithBlur");
                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: container,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 1
                        }
                    });
                    tl.fromTo(image, {scale:0, opacity: 1}, {scale:1, opacity: 0});
                } else {
                    container.classList.remove("darker");
                    content.classList.remove("showInWithBlur");
                }
            })
        })
        
        aboutMeObserver.observe(document.querySelector(".AboutMe"));
        


    }, [])

    return (
        <div className="AboutMe">
            <img className="AboutMe__img" src="./img/aboutMe.jpg" alt="about me"/>
            <div className="AboutMe__content opacity-0" id="AboutMe">
                <h2 className="AboutMe__title">About me</h2>
                <p>Web developer, tech enthusiast and sportsman, I realized websites for more than 3 years for the IRCAD (WebSurg) in agile method before launching my freelance activity in 2022. I also have in my arsenal strong notions in computer networking and home automation, parallel domains that help me to better adapt to the environment I face.</p>
                <p>My skills include: front-end development (ReactJS and JS frameworks in particular), custom WordPress theme or plugin creation and web integration, and many more.  
                I have a UX/UI expertise that allows me to accompany you on different themes and thus better realize the integrations.</p>
                <a className="button" href="mailto:contact@mickael-grass.com">Contact me</a>
                <a className="malt" href="https://www.malt.fr/profile/mickaelgrass">
                    <span>Join me on </span>
                    <img src="./img/logoMalt.png" alt="Malt logo"/>
                </a>
            </div>
            <div className="AboutMe__blurredbg"></div>
        </div>
    )
}

export default AboutMe;