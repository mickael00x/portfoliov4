import { SiReact, SiSass } from "react-icons/si";
const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__box">
                <div className="Footer__text">Made with </div>
                <div className="Footer__icons">
                    <SiReact />
                    <SiSass />
                </div>
            </div>
        </footer>
    )
}

export default Footer;