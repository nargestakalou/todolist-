import './IconCardCategory.css'


function IconCardCategory(props){

// console.log(props);


    return(
<>

<div className={`iconCard ${props.selected.icon==props.icon?'selected':''}`} onClick={()=>props.handler(props)}>
    {props.icon}
</div>

</>
    )
}

export default IconCardCategory