import { useState } from "react";
import FavoriteNavbar from "../../components/favoriteNavbar/FavoriteNavbar";
import "./Favorites.css";
import { Container, Row, Col} from "react-bootstrap";
import ButtonGroupTasks from "../../components/buttonGroupTasks/ButtonGroupTasks";
import SortAllTask from "../../components/sortAllTasks/SortAllTask";
import TaskCard from "../../components/taskCard/TaskCard";
import { FaStar } from "react-icons/fa6";
import ButtonsAllTasks from "../../components/buttonsAllTasks/ButtonsAllTasks";
import AddButton from "../../components/addButton/AddButton";
import Swal from "sweetalert2";
import Toast from "../../components/toast/Toast";

import { useNavigate } from "react-router-dom";

function Favorites() {

const saveTasks=    JSON.parse(localStorage.getItem("tasks")) || []

  const [allTasks, setAllTasks] = useState(saveTasks);
  const [favoriteTasks, setFavoriteTasks] = useState(
    allTasks.filter((task) => task.isFavorite === true),
  );
  const [activeBtn, setActiveBtn] = useState("All");
const[stateBtn,setStateBtn]=useState('All Tasks')
const[sortChange,setSortChange]=useState('default')
const[showToast,setShowToast]=useState(false)
const [contentToast,setContentToast]=useState('')

  //buttons


  const buttonsHandler=(selected)=>{
    setStateBtn('All Tasks')
    setSortChange('default')
        const allTaskLoc = [...allTasks];
    const favTasks = allTaskLoc.filter((task) => task.isFavorite === true);
let setFavTasks=[...favTasks]

    if(selected==='All'){
        setFavTasks=[...favTasks]
        setActiveBtn('All')

    }
    if(selected==='Active'){
        setFavTasks=[...favTasks].filter(task=>task.isCompleted===false)
        setActiveBtn('Active')

    }
    if(selected==='Completed'){
        setFavTasks=[...favTasks].filter(task=>task.isCompleted===true)
        setActiveBtn('Completed')
    }
    setFavoriteTasks(setFavTasks)
  }

//filter
  const filterHandler=(title)=>{
    setSortChange('default')
    const today=new Date()
    const onlyToday=new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    )

    const favTasksBase=allTasks.filter(task=>task.isFavorite===true)
    let filteredTasks=[...favTasksBase]

if(activeBtn==='All'){
  filteredTasks=[...favTasksBase]

}
if(activeBtn==='Active'){
  filteredTasks=filteredTasks.filter(task=>task.isCompleted===false)
}
if(activeBtn==='Completed'){
  filteredTasks=filteredTasks.filter(task=>task.isCompleted===true)
}
    if(title==='All Tasks'){
     filteredTasks=[...filteredTasks]
      setStateBtn('All Tasks')

    }
    if(title==='Today'){
      filteredTasks=filteredTasks.filter(task=>{
        const taskDate=new Date(task.startDate)
        return(
          new Date(
            taskDate.getFullYear(),
            taskDate.getMonth(),
            taskDate.getDate()
          ).getTime()===onlyToday.getTime()
        )
      })
      setStateBtn('Today')
    }
    if(title==='Upcoming'){
      filteredTasks=filteredTasks.filter(task=>{
        const taskDate=new Date(task.startDate)
        return(
          new Date(
            taskDate.getFullYear(),
            taskDate.getMonth(),
            taskDate.getDate()
          )
        ).getTime()>= onlyToday.getTime()
      })
      setStateBtn('Upcoming')
    }
    if(title==='Completed'){
      filteredTasks=filteredTasks.filter(task=>task.isCompleted===true)
      setStateBtn('Completed')
    }
    if(title==='Favorite'){
      filteredTasks=filteredTasks.filter(task=>task.isFavorite===true)
      setStateBtn('Favorite')
    }
    setFavoriteTasks(filteredTasks)

  }
  //sort
  const sortHandler=(sortTitle)=>{
   let  sortTasks=[...favoriteTasks]
    if(sortTitle==='Task name'){
      sortTasks=sortTasks.sort((a,b)=>a.titleTask.localeCompare(b.titleTask))
      setSortChange('Task name')

    }
    if(sortTitle==='Due date'){
      sortTasks=sortTasks.sort((a,b)=>b.startDate.localeCompare(a.startDate))
      setSortChange('Due date')
    }
    setFavoriteTasks(sortTasks)

  }



//pupop menu
const isCompletedHandler=(taskId)=>{
  const allTasksLoc=[...allTasks]
  const newAllTasks=allTasksLoc.map(task=>task.id===taskId?{...task,isCompleted:true}:task)
  localStorage.setItem('tasks',JSON.stringify(newAllTasks))
  setAllTasks(newAllTasks)
  setShowToast(true)
  setContentToast('Task Completed!')
  setTimeout(()=>setShowToast(false),5000)

}


const isFavoriteHandler=(taskId)=>{
  const allTasksLoc=[...allTasks]
  const newAllTasks=allTasksLoc.map(task=>task.id===taskId?{...task,isFavorite:true}:task)
  localStorage.setItem('tasks',JSON.stringify(newAllTasks))
  setAllTasks(newAllTasks)
  setShowToast(true)
  setContentToast('Added to favorite.')
  setTimeout(()=>setShowToast(false),5000)
}

const deleteTaskHandler=(taskId)=>{
 Swal.fire(
  {
    title:'Are you sure?',
    icon:'warning',
    showCancelButton:true,
    confirmButtonColor:'#3085d6',
    cancelButtonColor:'#d33',
    confirmButtonText:'Yes, delete this!'
  }
 ).then(result=>{
  if(result.isConfirmed){
     const allTasksLoc=[...allTasks]
  const newAllTasks=allTasksLoc.filter(task=>task.id!==taskId)
  const newFavTasks=newAllTasks.filter(task=>task.isFavorite===true)
  setAllTasks(newAllTasks)
  setFavoriteTasks(newFavTasks)
  localStorage.setItem('tasks',JSON.stringify(newAllTasks))
  setShowToast(true)
  setContentToast('Task deleted successfully')
  setTimeout(()=>setShowToast(false),5000)
  }
 })
  
}

const navigate=useNavigate()
const editTaskHandler =(taskId)=>{
  const selectedTask=[...favoriteTasks].find(task=>task.id===taskId)

  navigate('/editItem',{
    state:selectedTask
  })

  
}

  return (
    <>
      <FavoriteNavbar count={favoriteTasks.length} />
      <Container className=" mt-5 margin" style={{ maxWidth: "800px" }}>
        {showToast && <Toast isFavorite content={contentToast} />}

        <Row>
          <Col>

            <ButtonGroupTasks
              isFavorite
              onClick={buttonsHandler}
              active={activeBtn}
            />
          </Col>
        </Row>
        <SortAllTask isFavorite
        sortHandler={sortHandler}
        sortTitle={sortChange}
         />
        <Row>
          {favoriteTasks.map((task) => (
            <Col key={task.id}>
              <TaskCard {...task} iconFav={<FaStar size={20}   />} 
               isCompletedhandler={isCompletedHandler}
               isFavoriteHandler={isFavoriteHandler}
               deleteTaskHandler={deleteTaskHandler}
               editTaskHandler={editTaskHandler}
              
              
              />
            </Col>
          ))}
        </Row>
      </Container>
      <ButtonsAllTasks isFavorite
      onClick={filterHandler}
      isActive={stateBtn}
      
      
      />
      <AddButton isFavorite />
    </>
  );
}

export default Favorites;
