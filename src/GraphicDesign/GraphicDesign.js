import { useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const GraphicDesign = () => {
    const [src, setSrc] = useState(1);

    const nextImage = (e) => {
        return src < 7 ? setSrc(src+1) : "";
    }
    const previousImage = (e) => {
        return src > 1 ? setSrc(src-1) : "";
    }

    return (
        <div id="GraphicDesign" className="GraphicDesign">
            <div className="GraphicDesign__rectangle"></div>
            <h2>Some graphic design</h2>
            <div className="GraphicDesign__box">
                <BsFillArrowLeftCircleFill onClick={previousImage}/>
                <img 
                    className="GraphicDesign__img hidden" 
                    alt="graphic design from Mickaël Grass" 
                    src={"./img/webdesign/" + src + ".jpg"} 
                />
                <BsFillArrowRightCircleFill onClick={nextImage}/>
            </div>

        </div>
    )
}

export default GraphicDesign;