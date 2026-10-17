 import './ModalCategoryHome.css'
import Modal from 'react-bootstrap/Modal';
import CategoryStepOne from '../categoryStepOne/CategoryStepOne';
import CategoryStepTwo from '../categoryStepTwo/CategoryStepTwo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

 function ModalCategoryHome(props){
  const[inputValue,setInputValue]=useState('')
  const[selectedIcon,setSelectedIcon]=useState({})
  const[isStepOne,setIsStepOne]=useState(true)
const[colorId,setColorId]=useState('')



const[categoryCart,setCategoryCart]=useState(localStorage.getItem('categoryCarts')?JSON.parse(localStorage.getItem('categoryCarts')):[])
const navigate=useNavigate()

const createCartHandler=()=>{
  const newCategoryCart={
    title:inputValue,
    iconKey:selectedIcon.name,
    color:colorId,
    id:crypto.randomUUID()
  }
  const categoryCarts=[...categoryCart,newCategoryCart]
  localStorage.setItem('categoryCarts',JSON.stringify(categoryCarts))
  Swal.fire({
    icon:'success',
    title:'Added new category.',
    showConfirmButton:false,
    timer:1000

  })
  props.onClose()
}


const colorIdHandler=(id)=>{
  setColorId(id)
  

}

  const selectedIconHandler=(selected)=>{
    setSelectedIcon(selected)
    
  }

  const inputValueHandler=(e)=>{
    setInputValue(e.target.value)
  }
const isNextdisabled=inputValue.trim().length<=1 ||  Object.keys(selectedIcon).length === 0;


const clickBtnHandler=()=>{
  setIsStepOne(false)
}
const backSpHandler=()=>{
  setIsStepOne(true)
}

    return(
        <>
        <Modal  show={props.show} onHide={props.onClose}>
          {isStepOne? <CategoryStepOne onHide={props.onClose} inputValue={inputValue} iconHandler={selectedIconHandler} inputHandler={inputValueHandler} isNextdisabled={isNextdisabled} onClickStep={clickBtnHandler} selectedIcon={selectedIcon} />: <CategoryStepTwo inputValue={inputValue} selectedIcon={selectedIcon.icon} colorIdHandler={colorIdHandler} colorId={colorId} backSp={backSpHandler}  createCartHandler={createCartHandler} /> }
      </Modal>
        
        </>
    )
 }


 export default ModalCategoryHome