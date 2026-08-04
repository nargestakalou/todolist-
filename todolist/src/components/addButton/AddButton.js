import { Link } from "react-router-dom";
import "./AddButton.css";
import { MdAdd } from "react-icons/md";

function AddButton() {
  return (
    <div className="buttonContainer">
      <div className="buttonAdd">
        <Link to="/addnewitem">
          <MdAdd size={'50px'} />
        </Link>
      </div>
    </div>
  );
}

export default AddButton;
