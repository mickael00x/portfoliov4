import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const Navigation = ({ currentScrollPosition, direction, moveSlide }) => {
    return (
        <button 
            className={
                direction === "next" ? "SliderBox__next " + currentScrollPosition : "SliderBox__prev " + currentScrollPosition
            } 
            onClick={moveSlide}
        >
            {direction === "next" ?  <BsFillArrowRightCircleFill /> : <BsFillArrowLeftCircleFill/>} 
        </button>
        
    );
}

export default Navigation;