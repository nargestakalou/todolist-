import { useState } from "react";
import NavbarWork from "../../components/navbarWork/NavbarWork";
import "./Work.css";
import { Col, Container, Row } from "react-bootstrap";
import ButtonGroupTasks from "../../components/buttonGroupTasks/ButtonGroupTasks";
import SortAllTask from "../../components/sortAllTasks/SortAllTask";
import TaskCard from "../../components/taskCard/TaskCard";
import ButtonsAllTasks from "../../components/buttonsAllTasks/ButtonsAllTasks";
import AddButton from "../../components/addButton/AddButton";
import Toast from "../../components/toast/Toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Work() {
  //states
  const savedTasks=JSON.parse(localStorage.getItem('tasks'))||[]
  const [allTasks, setAllTasks] = useState(savedTasks );
  const [workTasks, setWorkTasks] = useState(
    allTasks.filter((task) => task.selectedCategory.title === "Work"),
  );
  const [activeBtn, setActiveBtn] = useState("All");
  const [sortChange, setSortChange] = useState("default");
  const [showToast, setShowToast] = useState(false);
  const [contentToast, setContentToast] = useState("");
  const [stateBtn, setStateBtn] = useState("All Tasks");
  const [stateTasks, setStateTasks] = useState([]);
  //navigate
  const navigate = useNavigate();

  //bouttons


const buttonsHadler=(selected)=>{
  const allTaskLoc=[...allTasks]
  const workTasks=allTaskLoc.filter(task=>task.selectedCategory.title==='Work')
  let FilterWorkTasks=[...workTasks]
  setSortChange('default')
  setStateBtn('All Tasks')


  if(selected==='All'){
    FilterWorkTasks=[...workTasks]
    setActiveBtn('All')
    
  }

  if(selected==='Active'){
    FilterWorkTasks=FilterWorkTasks.filter(task=>task.isCompleted===false)
    setActiveBtn('Active')
  }
  if(selected==='Completed'){
    FilterWorkTasks=FilterWorkTasks.filter(task=>task.isCompleted===true)
    setActiveBtn('Completed')
  }
  setWorkTasks(FilterWorkTasks)
}


  //sort

  const sortHandler = (sortTitle) => {
    let sortTasks = [...workTasks]
    if(sortTitle==='default'){
      sortTasks=[...workTasks]
      setSortChange('default')
    }
    if(sortTitle==='Due date'){
      sortTasks=sortTasks.sort((a,b)=>b.startDate.localeCompare(a.startDate))
      setSortChange('Due date')
    }
    if(sortTitle==='Task name'){
      setSortChange('Task name')
      sortTasks=sortTasks.sort((a,b)=>a.titleTask.localeCompare(b.titleTask))
    }
    setWorkTasks(sortTasks)
    
  };

  //popupMenu
  const isCompletedHandler = (taskId) => {
    const allTaskLoc = [...allTasks];
    const newAllTasks = allTaskLoc.map((task) =>
      task.id === taskId ? { ...task, isCompleted: true } : task,
    );
    localStorage.setItem("tasks", JSON.stringify(newAllTasks));
    setAllTasks(newAllTasks);
    setShowToast(true);
    setContentToast("Task Completed!");
    setTimeout(() => setShowToast(false), 5000);
  };

  const isFavoriteHandler = (taskId) => {
    const allTaskLoc = [...allTasks];
    const newAllTasks = allTaskLoc.map((task) =>
      task.id === taskId ? { ...task, isFavorite: true } : task,
    );
    localStorage.setItem("tasks", JSON.stringify(newAllTasks));
    setAllTasks(newAllTasks);
    setShowToast(true);
    setContentToast("Added to favorites.");
    setTimeout(() => setShowToast(false), 5000);
  };

  const deleteTaskHandler = (taskId) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this!",
    }).then((result) => {
      if (result.isConfirmed) {
        const allTaskLoc = [...allTasks];
        const newAllTasks = allTaskLoc.filter((task) => task.id !== taskId);
        const newWorkTasks = newAllTasks.filter(
          (task) => task.selectedCategory.title === "Work",
        );
        setAllTasks(newAllTasks);
        setWorkTasks(newWorkTasks);
        localStorage.setItem("tasks", JSON.stringify(newAllTasks));
        setShowToast(true);
        setContentToast("Task deleted successfully!");
        setTimeout(() => setShowToast(false), 5000);
      }
    });
  };
  const editTaskHandler = (taskId) => {
    const selesctedTask = [...workTasks].find((task) => taskId === task.id);
    navigate("/editItem", {
      state: selesctedTask,
    });

  };

  //buttonsBottom
  const filterHandler = (title) => {
    setSortChange('default')
    const today = new Date();
    const onlyToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
const workTasksBase = allTasks.filter(
  (task) => task.selectedCategory.title === "Work"
);

let filteredTasks = [...workTasksBase];

    if (activeBtn === "All") {
      filteredTasks = [...workTasksBase];
      
    }

    if (activeBtn === "Active") {
      filteredTasks = filteredTasks.filter(
        (task) => task.isCompleted === false,
      );
      setStateBtn('Active')
    }
    if (activeBtn === "Completed") {
      filteredTasks = filteredTasks.filter((task) => task.isCompleted === true);
      setStateTasks('Completed')
    }

    if (title === "Today") {
      filteredTasks= filteredTasks.filter((task) => {
        const taskDate = new Date(task.startDate);
        return (
          new Date(
            taskDate.getFullYear(),
            taskDate.getMonth(),
            taskDate.getDate(),
          ).getTime() === onlyToday.getTime()
        );
      });
      setStateBtn('Today')
    }


    if(title==="Upcoming"){
      filteredTasks=filteredTasks.filter(task=>{
        const taskDate=new Date(task.startDate)
        return(
          new Date(
            taskDate.getFullYear(),
            taskDate.getMonth(),
            taskDate.getDate()
          ).getTime() >= onlyToday.getTime()
        )
        
      })
      setStateBtn('Upcoming')
    }
   if(title==='All Tasks'){
filteredTasks=[...filteredTasks]
setStateBtn('All Tasks')
   }
   if(title==='Completed'){

    filteredTasks=filteredTasks.filter(task=>task.isCompleted===true)
setStateBtn('Completed')
   }
   if(title==='Favorite'){
    filteredTasks=filteredTasks.filter(task=>task.isFavorite===true)
setStateBtn('Favorite')
   }
setWorkTasks(filteredTasks)

  };



  return (
    <>
      <NavbarWork count={workTasks.length} />
      <Container className="mt-5 margin" style={{ maxWidth: "800px" }}>
        {showToast && <Toast content={contentToast} />}
        <Row>
          <Col>
            <ButtonGroupTasks
              onClick={buttonsHadler}
              active={activeBtn}
            />
          </Col>
        </Row>
        <SortAllTask
          sortTitle={sortChange}
          sortHandler={sortHandler}
        />
        <Row>
          {workTasks.map((task) => (
            <Col key={task.id}>
              <TaskCard
                {...task}
                isCompletedhandler={isCompletedHandler}
                isFavoriteHandler={isFavoriteHandler}
                deleteTaskHandler={deleteTaskHandler}
                editTaskHandler={editTaskHandler}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <ButtonsAllTasks
        onClick={filterHandler}
        isActive={stateBtn}
      />
      <AddButton />
    </>
  );
}

export default Work;
