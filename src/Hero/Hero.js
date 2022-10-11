import React, {useEffect} from "react";
import Presentation from "./Presentation";

const Hero = () => {
    
    useEffect(() => {

    });

    return (
        <div className="Hero" id="Hero">
            {/* <video className="Hero__video" webkit-playsinline playsinline autoplay="autoplay" muted defaultMuted  >
                <source src="./video/room_animation.mp4"
                        type="video/mp4"/>
            </video> */}
            {/* <img className="Hero__video" src="/img/room_animation.gif" alt="web animation from @KellyGrass"/> */}
            <div className="Hero__content Hero__content1">Where the magic happens</div>
            <div className="Hero__content Hero__content2">Where code is being made</div>
            <div className="Hero__content Hero__content3">Where passion meets creativity</div>
            <div className="Hero__presentation_box">
                <Presentation />
            </div>
        </div>
    )
}

export default Hero;