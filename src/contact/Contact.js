import { BsChatTextFill } from "react-icons/bs";

const Contact = () => {
    return (
        <div className="Contact">
            <a className="Contact__mail" href="mailto: contact@mickael-grass.com">
                Contact me
                <BsChatTextFill />
                <span>Let's discuss! 😊 </span>
            </a>
        </div>
    )
}

export default Contact;