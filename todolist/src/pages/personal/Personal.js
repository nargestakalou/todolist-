import { Col, Container, Row } from "react-bootstrap";
import "./Personal.css";
import ButtonGroupTasks from "../../components/buttonGroupTasks/ButtonGroupTasks";
import SortAllTask from "../../components/sortAllTasks/SortAllTask";
import TaskCard from "../../components/taskCard/TaskCard";
import AddButton from "../../components/addButton/AddButton";
import ButtonsAllTasks from "../../components/buttonsAllTasks/ButtonsAllTasks";
import { useState } from "react";
import NavbarPersonal from "../../components/navbarPersonal/NavbarPersonal";
import Toast from "../../components/toast/Toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Personal() {
  const [allTasks, setAllTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );
  const [personalTasks, setPersonalTasks] = useState(
    allTasks.filter((task) => task.selectedCategory.title === "Personal"),
  );
  const [activeBtn, setActiveBtn] = useState("All");
  const [sortChange, setSortChange] = useState("default");
  const [showToast, setShowToast] = useState(false);
  const [contentToast, setContentToast] = useState("");
  const [isActiveButton, setIsActiveButton] = useState("All Tasks");
  const navigate = useNavigate();

  //buttonsGroup


  const buttonsHandler=(selected)=>{
    setSortChange('default')
    setIsActiveButton('All Tasks')
    const allTaskLoc=[...allTasks]
    const personalTasksBase=allTaskLoc.filter(task=>task.selectedCategory.title==='Personal')
    let filterPersonalTasks=[...personalTasksBase]
    if(selected==='All'){
      filterPersonalTasks=[...personalTasksBase]
      setActiveBtn('All')
    }
    if(selected==='Active'){
      filterPersonalTasks=filterPersonalTasks.filter(task=>task.isCompleted===false)
      setActiveBtn('Active')
    }
    if(selected==='Completed'){
      filterPersonalTasks=filterPersonalTasks.filter(task=>task.isCompleted===true)
      setActiveBtn('Completed')
    }
    setPersonalTasks(filterPersonalTasks)

  }

  //sort handler

  const sortPersonalTasksNameHandler = () => {
    const sortTaskName = [...personalTasks].sort((a, b) =>
      a.titleTask.localeCompare(b.titleTask),
    );

    setSortChange("Task name");
    setPersonalTasks(sortTaskName);
  };

  const sortDateHandler = () => {
    setSortChange("Due Date");

    const sortDueDate = [...personalTasks].sort((a, b) =>
      a.startDate.localeCompare(b.startDate),
    );
    setPersonalTasks(sortDueDate);
  };

  // popupMenu

  const isCompletedHandler = (taskId) => {
    const allTasks = JSON.parse(localStorage.getItem("tasks"));
    const completedTasks = allTasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: true } : task,
    );
    const completedPersonalTasks = completedTasks.filter(
      (task) => task.selectedCategory.title === "Personal",
    );
    localStorage.setItem("tasks", JSON.stringify(completedTasks));
    setPersonalTasks(completedPersonalTasks);
    setAllTasks(completedTasks);
    setShowToast(true);
    setContentToast("Task completed!");
    setTimeout(() => setShowToast(false), 5000);
  };
  const isFavoriteHandler = (taskId) => {
    const allTasks = JSON.parse(localStorage.getItem("tasks"));
    const favoriteTasks = allTasks.map((task) =>
      task.id === taskId ? { ...task, isFavorite: true } : task,
    );
    const favoritePersonalTasks = favoriteTasks.filter(
      (task) => task.selectedCategory.title === "Personal",
    );
    setPersonalTasks(favoritePersonalTasks);
    localStorage.setItem("tasks", JSON.stringify(favoriteTasks));
    setAllTasks(favoriteTasks);
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
        const allTasks = JSON.parse(localStorage.getItem("tasks"));
        const newAllTasks = allTasks.filter((task) => task.id !== taskId);
        const personalAllTask = newAllTasks.filter(
          (task) => task.selectedCategory.title === "Personal",
        );
        setPersonalTasks(personalAllTask);
        setAllTasks(newAllTasks);

        localStorage.setItem("tasks", JSON.stringify(newAllTasks));
        setShowToast(true);
        setContentToast("Task deleted successfully!");
        setTimeout(() => setShowToast(false), 5000);
      }
    });
  };

  const editTaskHandler = (taskId) => {
    const allTasks = JSON.parse(localStorage.getItem("tasks"));
    const selectedTask = allTasks.find((task) => task.id === taskId);
    navigate("/editItem", {
      state: selectedTask,
    });
  };

  //buttonsAllTasksBottom

  const filterHandler = (title) => {

const today=new Date()
const onlyToday=new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate()
)


    setSortChange("default");
    const personalTasksBase = allTasks.filter(
      (task) => task.selectedCategory.title === "Personal", );
    let filteredTasks = [...personalTasksBase];
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
    setPersonalTasks(filteredTasks)
  };

  return (
    <>
      <NavbarPersonal count={personalTasks.length} />
      <Container className="mt-5 margin" style={{ maxWidth: "800px" }}>
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
          sortHandler={sortPersonalTasksNameHandler}
          sortDateHandler={sortDateHandler}
          sortTitle={sortChange}
        />
        <Row>
          {personalTasks.map((task) => (
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
      <ButtonsAllTasks onClick={filterHandler} isActive={isActiveButton} />
      <AddButton />
    </>
  );
}

export default Personal;
