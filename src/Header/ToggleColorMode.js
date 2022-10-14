
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";


const ToggleColorMode = ({toggleTheme, theme}) => {

    return (
        <button onClick={toggleTheme} className="colorMode">
            { theme && theme === "dark" ? <BsFillSunFill className="sun"/> : <BsMoonFill className="moon"/>  }
        </button>
    )
}

export default ToggleColorMode;