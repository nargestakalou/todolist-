import { Container, Row, Col } from "react-bootstrap";
import AllTasksNavbar from "../../components/allTsksNavbar/AllTasksNavbar";
import TaskCard from "../../components/taskCard/TaskCard";
import "./AllTask.css";
import ButtonGroupTasks from "../../components/buttonGroupTasks/ButtonGroupTasks";
import SortAllTask from "../../components/sortAllTasks/SortAllTask";
import ButtonsAllTasks from "../../components/buttonsAllTasks/ButtonsAllTasks";
import AddButton from "../../components/addButton/AddButton";
import { useState } from "react";
import Toast from "../../components/toast/Toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function AllTask() {
  const seveTasks=JSON.parse(localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(seveTasks);
  const [isActiveButton, setIsActiveButton] = useState("All Tasks");
  const [sortChange, setSortChange] = useState("default");
  const [activeBtn, setActiveBtn] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [contentToast, setContentToast] = useState("");
  const [selectedTaskEdit, setSelectedTaskEdit] = useState(null);

  //buttonsBottom


const buttonsHandler=(selected)=>{
    setSortChange('default')
  setIsActiveButton('All Tasks')

  const newAllTasks=JSON.parse(localStorage.getItem('tasks'))
  let allTaskLoc=[...newAllTasks]
  if(selected==='All'){
    allTaskLoc=[...newAllTasks]
    setActiveBtn('All')
  }
  if(selected==='Active'){
allTaskLoc=allTaskLoc.filter(task=>task.isCompleted===false)
setActiveBtn('Active')
  }
  if(selected==='Completed'){
    allTaskLoc=allTaskLoc.filter(task=>task.isCompleted===true)
    setActiveBtn('Completed')
  }
  setTasks(allTaskLoc)
}



  //sortHandle
  const sortTasksNameHandler = () => {
    const newTasks = [...tasks];
    const newSortNameTasks = newTasks.sort((a, b) =>
      a.titleTask.localeCompare(b.titleTask),
    );
    setTasks(newSortNameTasks);
    setSortChange("Task name");
  };
  const sortDueDateHandler = () => {
    const newTasks = [...tasks];
    const newSortDueDate = newTasks.sort((a, b) =>
      a.startDate.localeCompare(b.startDate),
    );
    setTasks(newSortDueDate);
    setSortChange("Due date");
  };

  //filter
  const categoryTasksHandler = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  //popupHandler

  const isCompletedhandler = (taskId) => {
    const allTasks = JSON.parse(localStorage.getItem("tasks"));
    const completedTask = allTasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: true } : task,
    );
    setTasks(completedTask);
    localStorage.setItem("tasks", JSON.stringify(completedTask));
    setShowToast(true);
    setContentToast("Task completed!");
    setTimeout(() => setShowToast(false), 5000);
  };

  const isFavoriteHandler = (taskId) => {
    const allTasks = JSON.parse(localStorage.getItem("tasks"));

    const favoriteTask = allTasks.map((task) =>
      task.id === taskId ? { ...task, isFavorite: true } : task,
    );
    setTasks(favoriteTask);
    localStorage.setItem("tasks", JSON.stringify(favoriteTask));
    setShowToast(true);
    setContentToast("Added to favorites");
    setTimeout(() => setShowToast(false), 5000);
  };
  const deleteTaskHandler = (taskId) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this! ",
    }).then((result) => {
      if (result.isConfirmed) {
        const allTasks = JSON.parse(localStorage.getItem("tasks"));
        const deletTask = allTasks.filter((task) => task.id !== taskId);
        setTasks(deletTask);
        localStorage.setItem("tasks", JSON.stringify(deletTask));
        setShowToast(true);
        setContentToast("Task deleted successfully!");
        setTimeout(() => setShowToast(false), 5000);
      }
    });
  };
  const navigate = useNavigate();
  const editTaskHandler = (taskId) => {
    const allTasks = JSON.parse(localStorage.getItem("tasks"));
    const selectedTask = allTasks.find((task) => task.id === taskId);

    setSelectedTaskEdit(selectedTask);

    navigate("/editItem", {
      state: selectedTask,
    });
  };


  //buttonsBottomHandler
    const filterHandler = (title) => {

const today=new Date()
const onlyToday=new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate()
)


    setSortChange("default");
    const allTasksBase=JSON.parse(localStorage.getItem('tasks'))
    
    let filteredTasks = [...allTasksBase];
    if (activeBtn === "All"){
       filteredTasks = [...filteredTasks];
       setIsActiveButton('All Tasks')
      
      }
    if (activeBtn === "Active")
      filteredTasks = filteredTasks.filter(  (task) => task.isCompleted === false,);
    if (activeBtn === "Completed")
      filteredTasks = filteredTasks.filter((task) => task.isCompleted === true);
    if(title==='All Tasks'){
      filteredTasks=[...filteredTasks]
      setIsActiveButton('All Tasks')
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
      setIsActiveButton('Today')

    }
    if(title==='Upcoming'){
      filteredTasks=filteredTasks.filter(task=>{
        const taskDate=new Date(task.startDate)
        return(
          new Date(
            taskDate.getFullYear(),
            taskDate.getMonth(),
            taskDate.getDate()
          ).getTime()>= onlyToday.getTime()
        )
      })
      setIsActiveButton('Upcoming')
    }
    if(title==='Completed'){
      filteredTasks=filteredTasks.filter(task=>task.isCompleted===true)
      setIsActiveButton('Completed')
    }
    if(title==='Favorite'){
      filteredTasks=filteredTasks.filter(task=>task.isFavorite===true)
      setIsActiveButton('Favorite')
    }
    setTasks(filteredTasks)
  };


  return (
    <>
      <AllTasksNavbar
        sortHandler={sortTasksNameHandler}
        sortDateHandler={sortDueDateHandler}
        count={tasks.length}
        categoryHandler={categoryTasksHandler}
      />
      <Container className="mt-5 " style={{ maxWidth: "800px" }}>
        <Row>
          {showToast && <Toast content={contentToast} />}

          <Col>
            <ButtonGroupTasks
              onClick={buttonsHandler}
              active={activeBtn}
            />
          </Col>
        </Row>
        <SortAllTask
          sortHandler={sortTasksNameHandler}
          sortTitle={sortChange}
          sortDateHandler={sortDueDateHandler}
        />

        <Row className=" row-cols-12 row-cols-md-1" >
          {selectedCategory
            ? tasks
                .filter(
                  (task) => task.selectedCategory.title === selectedCategory,
                )
                .map((task,index) => (
                  <Col key={task.id}

                  >
                    <TaskCard {...task} 
                    isLast={index===tasks.length-1}
                    isCompletedhandler={isCompletedhandler}
                    isFavoriteHandler={isFavoriteHandler}
                    deleteTaskHandler={deleteTaskHandler}
                    editTaskHandler={editTaskHandler}
                    />
                  </Col>
                ))
            : tasks.map((task,index) => (
                <Col key={task.id}>
                  <TaskCard
                    {...task}
                                        isLast={index===tasks.length-1}

                    isCompletedhandler={isCompletedhandler}
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
        isActive={isActiveButton}
      />

      <AddButton />
    </>
  );
}

export default AllTask;
