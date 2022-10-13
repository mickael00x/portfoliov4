import SliderBox from './SliderBox/SliderBox';
import '../src/assets/scss/App.scss';
import React, { useEffect, useState } from 'react';
import Hero from './Hero/Hero';
import Loader from './Loader/Loader';
import Contact from './contact/Contact';
import Stack from './Stack/Stack';
import Header from './Header/Header';
import AboutMe from './aboutMe/AboutMe';
import GraphicDesign from './GraphicDesign/GraphicDesign';
import Contact2 from './contact2/Contact2';
import Footer from './Footer/Footer';
import Box from './utilities/Box';
import ColorMode from './toggleColorMode/ColorMode';
import theme from './theme';

function App() {
  const [currentTheme, setCurrentTheme] = useState(theme.defaultTheme);
  const handleColorMode = () => { currentTheme === "dark" ? setCurrentTheme("light") : setCurrentTheme("dark"); }

  const [isLoaded, setIsLoaded] = useState(false);
  const styles = {
    backgroundColor: theme[currentTheme].bg,
    color: theme[currentTheme].color
  }
  
  useEffect(() => {
    window.addEventListener('load', () => {
      return setIsLoaded(true);
    });
  }, [isLoaded])
  
  if(isLoaded) {
    return (
        <div className="App" style={styles}>
          <ColorMode handleColorMode={handleColorMode} currentTheme={currentTheme} />
          <Box currentTheme={currentTheme}>
            <Header />
            <Contact />
            <Hero />
            <SliderBox />
            <Contact2 />
            <GraphicDesign />
            <Stack />
            <AboutMe />
            <Footer />
          </Box>
        </div>
    );
  } else {
    return (
      <Loader />
    )
  }
}

export default App;
