import './ColorPicker.css'



function ColorPicker(props){
    return(
       <div className={` ${props.colorId===props.id? 'selectedColor':''}`}>
         <div className={`colorPick color${props.id} `} onClick={()=>props.handlerColor(props.id)}   >

        </div>
       </div>



    )
}

export default ColorPicker