import ItemPopup from "../itemPopup/ItemPopup";
import "./PopupMenu.css";
import { CiEdit } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

function PopupMenu(props) {
  return (
    <>
      <div className="containerPopup">
        <ItemPopup title={"Edit Task"} icon={<CiEdit size={25} />} color={""} 
        popupHandler={props.editTaskHandler}
        id={props.id} />
        <ItemPopup
          title={"Add to Favorite"}
          icon={<CiStar size={25} />}
          color={""}
          popupHandler={props.isFavoriteHandler}
          id={props.id}
        />
        <ItemPopup
          title={"Mark as Completed"}
          icon={<FaRegCircleCheck size={25} />}
          color={""}
          popupHandler={props.isCompletedhandler}
          id={props.id}
        />
        <ItemPopup
          title={"Delete"}
          icon={<RiDeleteBin6Line size={25} />}
          color={"red"}
          popupHandler={props.deletTaskHandler}
          id={props.id}
        />
      </div>
    </>
  );
}

export default PopupMenu;
