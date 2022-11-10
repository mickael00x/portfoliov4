import { BsChatTextFill } from "react-icons/bs";

const Contact = ({theme}) => {
    return (
        <div className="Contact">
            <a className="Contact__mail" href="mailto: contact@mickael-grass.com">
                <BsChatTextFill />
            </a> 
        </div>
    )
}

export default Contact;