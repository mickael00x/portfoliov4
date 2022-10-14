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
import Footer from './Footer/Footer';
import useDarkMode from './customHook/useDarkMode';
import ToggleColorMode from './Header/ToggleColorMode';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const {theme, toggleTheme} = useDarkMode();
  
  useEffect(() => {
    window.addEventListener('load', () => {
      return setIsLoaded(true);
    });
  }, [isLoaded])
  
  if(isLoaded) {
    return (
        <div className={"App " + theme}>
            <ToggleColorMode toggleTheme={toggleTheme} theme={theme} />
            <Header />
            <Contact />
            <Hero />
            <SliderBox />
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
