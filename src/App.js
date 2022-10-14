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
import useDarkMode from './customHook/useDarkMode';
import config from './config';
import ToggleColorMode from './Header/ToggleColorMode';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const {theme, toggleTheme} = useDarkMode();
  
  const styles = {
    backgroundColor: config[theme].bg,
    color: config[theme].color
  }
  
  useEffect(() => {
    window.addEventListener('load', () => {
      return setIsLoaded(true);
    });
  }, [isLoaded])
  
  if(isLoaded) {
    return (
        <div className={"App " + theme} style={styles}>
            <ToggleColorMode toggleTheme={toggleTheme} theme={theme} />
            <Header />
            <Contact />
            <Hero />
            <SliderBox />
            <Contact2 />
            <GraphicDesign />
            <Stack />
            <AboutMe />
            <Footer />
        </div>
    );
  } else {
    return (
      <Loader />
    )
  }
}

export default App;
