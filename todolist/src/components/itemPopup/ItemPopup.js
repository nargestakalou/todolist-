import "./ItemPopup.css";

function ItemPopup({title,icon,color,popupHandler,id}) {
  return (
    <div className={`itemPopup ${color}`} onClick={()=>popupHandler(id)}>
      <div className="iconPopup">
        {icon}
      </div>
        <div className="titlePopup">
        {title}
      </div>
      
    </div>
  );
}

export default ItemPopup;
