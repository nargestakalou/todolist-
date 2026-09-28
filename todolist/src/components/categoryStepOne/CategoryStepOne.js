import IconCardCategory from '../iconCardCategory/IconCardCategory';
import './CategoryStepOne.css'
import { GrFormPrevious } from "react-icons/gr";
import svgfolder from '../../assets/images/undraw_add-file-icon-only.svg'
import categoryIcons from '../../content/categoryIcon/categoryIcon'

function CategoryStepOne(props){
    const icons=categoryIcons
    console.log(icons);
    
    return(
        <>
        <div className="container">
            <div className="modalTitle">
                <span onClick={props.onHide}><GrFormPrevious  size={30}/></span>
                <span className='titleCategory'>Add Category</span>
            </div>
            <div className="modalSvg">
                <img src={svgfolder} alt=""  style={{width:'100px'}}/>
                <h5 style={{color:'rgb(82, 147, 180)',fontWeight:'bold',paddingTop:'12px'}}>Create a new category</h5>
                <p className='contentIcon'>Give your category a name and choose an icon and color.</p>

            </div>
            <div className="createCategory">
               <div className="categoryName">
                 <label htmlFor="">Category name</label>
                <input type="text"
                placeholder='e.g: Study,Health,Shopping...'
                value={props.inputValue}
                onChange={props.inputHandler}
                 />
               </div>
               <div className="my-2">
                <span >Choose an icon</span>
                <div className="icons">
                    {icons.map(icon=>(
                        <IconCardCategory  key={icon.name} {...icon} handler={props.iconHandler} selected={props.selectedIcon} />
                    ))}
                </div>

               </div>
                           <button className='addCategoryBtn' disabled={props.isNextdisabled} onClick={props.onClickStep} >Next</button>

            </div>
        </div>
        
        
        </>
    )
}


export default CategoryStepOne