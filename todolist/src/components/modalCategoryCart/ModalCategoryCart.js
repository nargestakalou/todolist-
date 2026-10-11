import { Modal } from 'react-bootstrap'
import './ModalCategoryCart.css'
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";


function ModalCategoryCart(props){
    return (
        <>
        <Modal show={props.isOpen}   onHide={props.onClose} className='customModal'>
            <div className="containerModal">
                <div className="itemModal" onClick={props.onEdit}>
                    <span className='titleModal'>
                        <CiEdit size={25}/>
                    </span>
                    <span>Edit Category</span>
                </div>
                <div className="itemModal red" onClick={props.onDelete}>
                    <span className='titleModal'>
                        <RiDeleteBin6Line size={25}/>
                    </span>
                    <span>Delete Category</span>
                </div>

            </div>



        </Modal>
        </>
    )
}


export default ModalCategoryCart