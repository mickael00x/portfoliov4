import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const BackToTop = () => {
    const [isActivated, setIsActivated] = useState("false");

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            let scrollPos = window.scrollY;
            scrollPos > 50 ? setIsActivated("show") : setIsActivated("hidden");
        })
    }, [isActivated]);
    return (
        <a href="#top" className={"Header__backToTop " + isActivated}>
            <BsFillArrowUpCircleFill />
            <span>Back to top</span>
        </a>
    )
}

export default BackToTop;