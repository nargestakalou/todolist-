import "./ButtonGroupTasks.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ButtonGroupTasks(props) {



  return (
   <div className="containerGroupFilter ">
     <ButtonGroup aria-label="Basic example" className={props.isFavorite?'buttonsContainer favoriteBtn':'buttonsContainer'}>
      <Button  onClick={ ()=>props.onClick('All')} className={props.active==='All' ? 'activeBtn':''}  >All</Button>
      <Button onClick={()=>props.onClick('Active')}  className={props.active==='Active'?'activeBtn':''}   >Active</Button>
      <Button   onClick={()=>props.onClick('Completed')}  className={props.active==='Completed'?'activeBtn':''} >Completed</Button>
    </ButtonGroup>
   </div>
  );
}

export default ButtonGroupTasks;
