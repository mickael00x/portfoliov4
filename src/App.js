import SliderBox from './SliderBox/SliderBox';
import '../src/assets/scss/App.scss';
import React, { useEffect, useState } from 'react';
import Hero from './Hero/Hero';
import Loader from './Loader/Loader';
import Contact from './contact/Contact';
import Stack from './Stack/Stack';
import Header from './Header/Header';
import AboutMe from './aboutMe/AboutMe';
import Footer from './Footer/Footer';
import useDarkMode from './customHook/useDarkMode';
import ToggleColorMode from './Header/ToggleColorMode';

function App() {
  const {theme, toggleTheme} = useDarkMode();

    return (
        <div className={"App " + theme}>
            <ToggleColorMode toggleTheme={toggleTheme} theme={theme} />
            <Header />
            <Contact />
            <Hero theme={theme}/>
            <Stack />
            <SliderBox theme={theme}/>
            <AboutMe />
            <Footer />
        </div>
    );

}

export default App;
