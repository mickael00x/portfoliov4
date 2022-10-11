import BackToTop from "./BackToTop";

const Header = () => {
    const handleClick = (e) => {
        if (window.matchMedia("(max-width: 940px)").matches) {          
        let headerContainer = document.querySelector(".Header");
        let itemContainer = document.querySelector(".Header__list");
        let items = document.querySelectorAll(".Header__link");
        headerContainer.classList.toggle("mobile")
        itemContainer.classList.toggle("mobile")
        items.forEach(i => i.classList.toggle("mobile"));
        } 
    }

    return (
        <header className="Header">
            <BackToTop />
            <div className="Header__hamburger" onClick={handleClick}>
                <div className="Header__hamburger--line"></div>
                <div className="Header__hamburger--line middle"></div>
                <div className="Header__hamburger--line"></div>
            </div>                            
            <div className="Header__list">
                <img className="Header__logo" src="./img/logo-white.png" alt="logo"/>
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