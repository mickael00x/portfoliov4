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
                <p>Fruitcake gummi bears donut croissant sweet roll sugar plum. Macaroon chocolate tootsie roll jelly beans lollipop. Tart ice cream sesame snaps pudding wafer candy canes.
                    Gingerbread jelly-o cheesecake bear claw brownie. Pudding gummi bears sweet roll wafer sesame snaps danish wafer muffin. Cake marshmallow shortbread gummies candy.</p>
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