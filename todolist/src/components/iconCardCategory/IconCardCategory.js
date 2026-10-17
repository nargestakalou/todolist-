import './IconCardCategory.css'


function IconCardCategory(props){



    return(
<>

<div className={`iconCard ${props.selected===props.name?'selected':''}`} onClick={()=>props.handler(props)}>
    {props.icon}
</div>

</>
    )
}

export default IconCardCategory