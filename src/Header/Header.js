import BackToTop from "./BackToTop";

const Header = ({theme}) => {

    const handleClick = (e) => {
        let headerContainer = document.querySelector(".Header");
        let itemContainer = document.querySelector(".Header__list");
        let items = document.querySelectorAll(".Header__link");
        let headerHamburgerContainer = document.querySelector(".Header__hamburger");
        headerContainer.classList.toggle("mobile")
        itemContainer.classList.toggle("mobile")
        items.forEach(i => i.classList.toggle("mobile"));  
        headerHamburgerContainer.children[0].classList.toggle("rotate");
        headerHamburgerContainer.children[1].classList.toggle("rotate");
        headerHamburgerContainer.children[2].classList.toggle("rotate");
    }

    return (
        <header className={"Header " + theme}>
            <BackToTop />
            <div className="Header__hamburger" onClick={handleClick}>
                <div className="Header__hamburger--line"></div>
                <div className="Header__hamburger--line middle"></div>
                <div className="Header__hamburger--line"></div>
            </div>                            
            <div className="Header__list">
                <div className="Header__item">
                    <a onClick={handleClick} href="#projects" className="Header__link">Projects</a>
                    <a onClick={handleClick} href="#GraphicDesign" className="Header__link">Graphic design</a>
                    <a onClick={handleClick} href="#stack" className="Header__link">Stack</a>
                    <a onClick={handleClick} href="#AboutMe" className="Header__link">About Me</a>
                </div>
            </div>
        </header>
    )
}

export default Header;