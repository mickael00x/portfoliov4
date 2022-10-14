import theme from "../config";

const Box = ({currentTheme, children}) => {

    return (
        <div 
            className="Box" 
            style={{
                backgroundColor: theme[currentTheme].bg,
                color: theme[currentTheme].color
            }}>
            {children}
        </div>
    )
}

export default Box;