import { Link } from "react-router-dom";
import "./ItemsList.css";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";
import { jsxs } from "react/jsx-runtime";

function ItemsList(props) {
  return (
    <Link to={props.link}>
      <div className={` itemContainer  ${props.class}  `} >
        <div className={`iconItem ${props.classIcon}`}>
          {props.icon}
        </div>
        <h5>{props.title}</h5>
        <div className="itemCount">
            <FaCircle size={'12px'}/>
            <span> <b >{props.length}</b>Items </span>
        </div>
      </div>
    </Link>
  );
}
export default ItemsList;
