import CustomButtom from "./UI/CustomButtom"
import CustomInput from "./UI/CustomInput"
import "../App.css"

function Modal({onClose}) {
const [closeModal, setCloseModal] = useState(false)

// const HandleClose = () => {
//     setCloseModal(true);
//     onClose(false)
// };
// if(closeModal) {
//     return null;
// }
    return (
        <div className="modal">
            <div className="modal_container">
                text
                <CustomInput/>
                <CustomInput/>
                <CustomInput/>
                <CustomButtom/>
            </div>
        </div>
    )
}
export default Modal