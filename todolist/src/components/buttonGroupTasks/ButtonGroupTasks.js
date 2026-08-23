import "./ButtonGroupTasks.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ButtonGroupTasks() {
  return (
   <div className="containerGroup ">
     <ButtonGroup aria-label="Basic example" className="buttonsContainer ">
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </ButtonGroup>
   </div>
  );
}

export default ButtonGroupTasks;
