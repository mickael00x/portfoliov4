import React, { useEffect } from "react";
import observer from "../utilities/observer";
const SliderItem = ({ itemData, theme }) => {
    useEffect(() => {
        document.querySelectorAll('.hidden').forEach((sliderItem, index) => {
            observer.observe(sliderItem);
        })
    }, [])

    const handleClick = (e) => {
        console.log(e);
    }
    return (
        <a href={itemData.link} target="blank"
        className={"SliderItem hidden " + itemData.title} 
        id={itemData.title} 
        data-index-number={itemData.id} 
        onClick={handleClick}
        >
            <h2 className="SliderItem__title"> {itemData.title} </h2>
            <div className="SliderItem__description"> {itemData.description} </div>
            <img  className="SliderItem__img" src={itemData.imageSrc} alt={itemData.description}/>
            <div className="SliderItem__tags"><span>made with</span>
                    { itemData.tags.map((tag, index) => (
                        <div key={index} className={"SliderItem__tags__tag " + tag}>{tag}</div>
                        ))}
            </div>
        </a>
    )
}

export default SliderItem;