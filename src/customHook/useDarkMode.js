import { useEffect, useState } from "react";
// import { theme } as default from "../theme";

const useDarkMode = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'dark') {
          setTheme('light')
        } else {
          setTheme('dark')
        }
    }
    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        if (localTheme) {
        setTheme(localTheme)
        }
    }, [])

    return {
        theme,
        toggleTheme,
      }
}

export default useDarkMode;
