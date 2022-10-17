import React from "react";
import Presentation from "./Presentation";

const Hero = ({theme}) => {
    return (
        <div className={"Hero " + theme} id="Hero">
            {/* <div className="Hero__content Hero__content1">Where the magic happens</div>
            <div className="Hero__content Hero__content2">Where code is being made</div>
            <div className="Hero__content Hero__content3">Where passion meets creativity</div> */}
            <div className={"Hero__presentation_box " + theme}>
                <Presentation theme={theme}/>
            </div>
        </div>
    )
}

export default Hero;