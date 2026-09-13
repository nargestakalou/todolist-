import './Toast.css'


function Toast({content,isFavorite}){
    return(
        <div className= {isFavorite? 'containerToast favBorder':'containerToast'}>
            <p>{content} </p>
        </div>
    )
}


export default Toast