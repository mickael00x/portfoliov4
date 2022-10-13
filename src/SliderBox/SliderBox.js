import React from "react";
import SliderItem from "../SliderItem/SliderItem";
import { items } from "./ItemsList";
const SliderBox = () => {
    return (
        <div className="SliderBox section" id="projects">
            <h2>Latest projects</h2>
            <div className="SliderBox__box">
                { items && items.map((itemData, index) => (
                    <SliderItem id={index} key={index} itemData={itemData}/>
                ))}
            </div>

        </div>
    )
}

export default SliderBox;

