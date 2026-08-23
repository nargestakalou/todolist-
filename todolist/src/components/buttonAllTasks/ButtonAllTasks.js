import "./ButtonAllTasks.css";

function ButtonAllTasks({ title, icon,onClick,isActive }) {

console.log(isActive);


  return (
    <div className="buttonTask">
      <button onClick={onClick} className={isActive==title? 'active': ''}  >
        <span>{icon}</span>
        <span>{title}</span>
      </button>
    </div>
  );
}

export default ButtonAllTasks;
