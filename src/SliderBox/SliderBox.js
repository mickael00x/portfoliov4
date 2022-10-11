import React, { useEffect, useRef, useState } from "react";
import SliderItem from "../SliderItem/SliderItem";
import { items } from "./ItemsList";
import Navigation from "./SliderNavigation/Navigation";

const SliderBox = ( {isLoaded} ) => {
    const ref = useRef("");
    const boxRef = useRef("");
    const [scrollAmount, setScrollAmount] = useState(0);
    const [scrollRight, setScrollRight] = useState(0);
    const [numberOfElements, setNumberOfElements] = useState(0);
    const [currentScrollPosition, setCurrentScrollPosition] = useState(1);


    const nextSlide = () => {
        if (window.matchMedia("(max-width: 800px)").matches) {
            document.querySelector(".SliderBox__box").scrollLeft = currentScrollPosition * scrollRight;
        return setCurrentScrollPosition(currentScrollPosition+1);
        } else if (window.matchMedia("(max-width: 1599px)").matches) {
            document.querySelector(".SliderBox__box").scrollLeft = currentScrollPosition * (scrollRight/2);
            return setCurrentScrollPosition(currentScrollPosition+1);
        } else {
            document.querySelector(".SliderBox__box").scrollLeft = currentScrollPosition * (scrollRight/3);
            return setCurrentScrollPosition(currentScrollPosition+1);
        }
        
    }

    const prevSlide = () => {
        if (window.matchMedia("(max-width: 800px)").matches) {
            document.querySelector(".SliderBox__box").scrollLeft = (currentScrollPosition -2) * scrollRight;
            return setCurrentScrollPosition(currentScrollPosition-1);
        } else if (window.matchMedia("(max-width: 1599px)").matches) {
            document.querySelector(".SliderBox__box").scrollLeft = (currentScrollPosition -2) * (scrollRight/2);
            return setCurrentScrollPosition(currentScrollPosition-1);
        } else {
            document.querySelector(".SliderBox__box").scrollLeft = (currentScrollPosition -2) * (scrollRight/3);
            return setCurrentScrollPosition(currentScrollPosition-1);
        }
        
    }

    useEffect(() => {
        setScrollAmount(document.querySelector(".SliderBox__box").clientWidth);
        setScrollRight(scrollAmount);
        setNumberOfElements(document.querySelector(".SliderBox__box").childElementCount);
        if(currentScrollPosition <= 0) {
            return setCurrentScrollPosition(1);
        } else if (currentScrollPosition > (numberOfElements - 1)) {
            return setCurrentScrollPosition(numberOfElements - 1);
        }
    }, [scrollAmount, scrollRight, numberOfElements, currentScrollPosition]);

    return (
        <div className="SliderBox section" id="projects" ref={ref}>
            <h2>Latest projects</h2>
            <div className="SliderBox__box" ref={boxRef}>
                { items && items.map((itemData, index) => (
                    <SliderItem id={index} key={index} itemData={itemData}/>
                ))}
            </div>
            <div className="SliderBox__navigation">
                <Navigation moveSlide={nextSlide} currentScrollPosition={currentScrollPosition} direction={"next"}/>
                <Navigation moveSlide={prevSlide} currentScrollPosition={currentScrollPosition} direction={"prev"}/>
            </div>

        </div>
    )
}

export default SliderBox;

