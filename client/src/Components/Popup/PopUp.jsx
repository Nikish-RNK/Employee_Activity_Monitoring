import "./Popup.css";
import { IoClose } from "react-icons/io5";

const PopUp = ({ message, isSuccess, onClose }) => {
    return (
        <div className="popup">
            <div className={`popup-content ${isSuccess ? "success" : "error"}`}>
                <p >{message}</p>
                <button onClick={onClose}>
                    <IoClose />
                </button>
            </div>
        </div>
    );
};

export default PopUp;
