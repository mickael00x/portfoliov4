
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";


const ToggleColorMode = ({toggleTheme, theme}) => {

    return (
        <button onClick={toggleTheme} className="colorMode">
            { theme && theme === "dark" ? <BsFillSunFill /> : <BsMoonFill />  }
        </button>
    )
}

export default ToggleColorMode;