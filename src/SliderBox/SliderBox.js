import React from "react";
import SliderItem from "../SliderItem/SliderItem";
import { items } from "./ItemsList";
const SliderBox = ({theme}) => {
    return (
        <div className={"SliderBox section " + theme} id="projects">
            <h2>Latest projects</h2>
            <div className={"SliderBox__box " + theme}>
                { items && items.map((itemData, index) => (
                    <SliderItem id={index} key={index} itemData={itemData}/>
                ))}
            </div>

        </div>
    )
}

export default SliderBox;

