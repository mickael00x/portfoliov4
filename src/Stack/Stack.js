import { useRef, useEffect } from "react";
import observer from "../utilities/observer";

const Stack = () => {
    const ref = useRef(null);
    
    let stacks = 
    [{
        name: "NextJS", 
        date: "Since 2022",
        tag: "#coding",
        link: "https://advent-calendar-puzzle.vercel.app/"
    }, 
    {
        name: "TypeScript", 
        date: "Since 2022",
        tag: "#coding",
        link: "https://github.com/mickael00x/ToDo"
    }, 
    {
        name: "Javascript", 
        date: "Since 2018",
        tag: "#coding",
        link: "http://message-app.surge.sh/"
    }, 
    {
        name: "React", 
        date: "Since 2019",
        tag: "#coding",
        link: "https://strava-api.surge.sh"
    },
    
    {
        name: "Docker",
        date: "Since 2020",
        tag: "#container",
        link: "https://github.com/mickael00x/docker-traefik"
    }, 
    {
        name: "WordPress",
        date: "Since 2018",
        tag: "#customTheme",
        link: "https://couretjardin.fr"
    }, 
    {
        name: "Elementor",
        date: "Since 2019",
        tag: "#customTheme",
        link: "https://www.ircad.fr"
    },
    {
        name: "PHP",
        date: "Since 2018",
        tag: "#webDeveloppement",
        link: "https://www.ircad.fr/mis-training-center/course-calendar/"
    },
    {
        name: "Figma", 
        date: "Since 2020",
        tag: "#graphicDesign",
        link: "https://www.figma.com/file/wAL4lKdx4NO1gJ63bF6cJ9/maquette"
    }, 
    {
        name: "iTerm", 
        date: "Since 2019",
        tag: "#tool",
        link: "https://github.com/mickael00x/.zshrc"
    }, 
    {
        name: "Symfony", 
        date: "Since 2019",
        tag: "#coding",
        link: "https://websurg.com"
    }, 
    {
        name: "VIM", 
        date: "Since 2020",
        tag: "#tool",
        link: "https://github.com/mickael00x/dotfiles"
    }, 
    {
        name: "Supabase", 
        date: "Since 2021",
        tag: "#database"
    },
    {
        name: "MySQL", 
        date: "Since 2019",
        tag: "#database"
    }, 
    {
        name: "Sass", 
        date: "Since 2017",
        tag: "#coding",
        link: "https://github.com/mickael00x/natours"
    }, 
    {
        name: "Tailwind", 
        date: "Since 2021",
        tag: "#coding",
        link: ""
    },
    {
        name: "gsap", 
        date: "Since 2021",
        tag: "#webAnimation",
        link: "https://mickael-grass.com"
    }, 
    {
        name: "Shapr3D", 
        date: "Since 2021",
        tag: "#3Dmodeling",
        link: "https://www.icloud.com/iclouddrive/026bqvxrBsgQG3US8h2V7B-iA#Belkin2"
    }, 
    {
        name: "Arduino", 
        date: "Since 2020",
        tag: "#IoT",
        link: "https://github.com/mickael00x/ambilight"
    }];
    
    useEffect(() => {
        document.querySelectorAll('.hidden').forEach((sliderItem, index) => {
            observer.observe(sliderItem);
        })
    }, [])

    return (
        <div id="stack" className="stack section">
            <div className="stack__lines"></div>
            <h2 className="stack__title">Skills</h2>
            <div className="stack__subtitle">Click on element to view associated projects made with ❤️</div>
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