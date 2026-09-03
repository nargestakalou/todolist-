import './Toast.css'


function Toast({content}){
    return(
        <div className="containerToast">
            <p>{content} </p>
        </div>
    )
}


export default Toast