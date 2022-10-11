import { useRef, useEffect } from "react";
import observer from "../utilities/observer";

const Stack = () => {
    const ref = useRef(null);
    
    let stacks = 
    [{
        name: "Javascript", 
        date: "Since 2018",
        tag: "#coding"
        
    }, 
    {
        name: "React", 
        date: "Since 2019",
        tag: "#coding"
        
    },
    {
        name: "AdobeXD",
        date: "Since 2018",
        tag: "#graphicDesign"
    }, 
    {
        name: "WordPress",
        date: "Since 2018",
        tag: "#customTheme"
    }, 
    {
        name: "Elementor",
        date: "Since 2019",
        tag: "#customTheme"
    },
    {
        name: "PHP",
        date: "Since 2018",
        tag: "#webDeveloppement"
    },
    {
        name: "Figma", 
        date: "Since 2020",
        tag: "#graphicDesign"
        
    }, 
    {
        name: "iTerm", 
        date: "Since 2019",
        tag: "#tool"
        
    }, 
    {
        name: "Symfony", 
        date: "Since 2019",
        tag: "#coding"
        
    }, 
    {
        name: "VIM", 
        date: "Since 2020",
        tag: "#tool"
    
    }, 
    {
        name: "NodeJS", 
        date: "Since 2020",
        tag: "#coding"
        
    }, 
    {
        name: "Supabase", 
        date: "Since 2021",
        tag: "#database"
        
    }, 
    {
        name: "MongoDB", 
        date: "Since 2021",
        tag: "#database"
        
    }, 
    {
        name: "MySQL", 
        date: "Since 2019",
        tag: "#coding"
        
    }, 
    {
        name: "Sass", 
        date: "Since 2017",
        tag: "#coding"
        
    }, 
    {
        name: "gsap", 
        date: "Since 2021",
        tag: "#web_animation"
        
    }, 
    {
        name: "Cura", 
        date: "Since 2020",
        tag: "#3Dprint"
        
    }, 
    {
        name: "Shapr3D", 
        date: "Since 2021",
        tag: "#3Dmodeling"
        
    }, 
    {
        name: "QMK", 
        date: "Since 2021",
        tag: "#customKeyboard"
    
    }, 
    {
        name: "Arduino", 
        date: "Since 2020",
        tag: "#IoT",
        link: "https://www.google.com"
    }];
    
    useEffect(() => {
        document.querySelectorAll('.hidden').forEach((sliderItem, index) => {
            observer.observe(sliderItem);
        })
    }, [])

    return (
        <div id="stack" className="stack section">
            <div className="stack__lines"></div>
            <div className="stack__title">Software, technologies & tools I use</div>
            <div className="stack__subtitle">Click on element to view associtated projects made with ❤️</div>
            <div className="stack__container">
                <div className="stack__list">
                    { stacks && stacks.map((stack, index) => (
                        <a href={stack.link} ref={ref}key={index} className="stack__item hidden">
                            <img alt={stack.title} height="35" className="stack__img" src={"/img/stack/" + stack.name + ".png"}/>
                            <div className="stack__texts">
                                <div>{stack.name}</div> 
                                <div>{stack.date}</div> 
                            </div>
                            <div className="stack__tag">{stack.tag} </div>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Stack;