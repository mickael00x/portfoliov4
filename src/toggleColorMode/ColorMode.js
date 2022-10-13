import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
const ColorMode = ({handleColorMode, currentTheme}) => {
    return (
        <button onClick={handleColorMode} className="colorMode">
            { currentTheme && currentTheme === "dark" ? <BsFillSunFill /> : <BsMoonFill />  }
        </button>
    )
}

export default ColorMode;