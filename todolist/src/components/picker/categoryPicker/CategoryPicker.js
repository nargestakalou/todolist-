import "./CategoryPicker.css";
import { MdOutlineCategory } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import ModalCategory from "../../modal/modalCategory/ModalCategory";
import categoryIcons from "../../../content/categoryIcon/categoryIcon";
function CategoryPicker({ onSelect, categorySelected }) {
  const [isOpen, setIsOpen] = useState(false);
const modalHandler=()=>{
  setIsOpen(true)
}




  const icons = categoryIcons;
  const selectIcon = icons.find(
    (icon) => icon.name === categorySelected?.icon,
  )?.icon;

  return (
    <>
      <p className="title">Category</p>
      <button className="customSelector" type="button" onClick={modalHandler}>
        <div className="leftSide">
          <span className="icons">
            {categorySelected ? selectIcon : <MdOutlineCategory size={25} />}
          </span>

          {categorySelected ? (
            <span className="textColor"> {categorySelected.title}</span>
          ) : (
            <span>Choose a category</span>
          )}
        </div>
        <div className="rightSide">
          <IoIosArrowDown size={"20px"} />
        </div>
      </button>
      {isOpen && (
        <ModalCategory
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSelect={onSelect}
          categorySelected={categorySelected}
        />
      )}
    </>
  );
}

export default CategoryPicker;
