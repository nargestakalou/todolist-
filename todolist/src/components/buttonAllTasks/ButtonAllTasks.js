import "./ButtonAllTasks.css";

function ButtonAllTasks({ title, icon,onClick,isActive ,isFavorite}) {



  return (
    <div className={isFavorite? 'buttonTask favBtn':'buttonTask'}>
      <button onClick={()=>onClick(title)} className={isActive==title? 'active': ''}  >
        <span>{icon}</span>
        <span>{title}</span>
      </button>
    </div>
  );
}

export default ButtonAllTasks;
