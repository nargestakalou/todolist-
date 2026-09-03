import "./ButtonGroupTasks.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ButtonGroupTasks(props) {



  return (
   <div className="containerGroup ">
     <ButtonGroup aria-label="Basic example" className="buttonsContainer ">
      <Button  onClick={  props.onClickAllTasks} className={props.active==='All' ? 'activeBtn':''}  >All</Button>
      <Button onClick={props.onClickActiveTasks}  className={props.active==='Active'?'activeBtn':''}   >Active</Button>
      <Button   onClick={props.onClickCompleted}  className={props.active==='Completed'?'activeBtn':''} >Completed</Button>
    </ButtonGroup>
   </div>
  );
}

export default ButtonGroupTasks;
