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

  const allTasksPersonalHandler = () => {
    setPersonalTasks(
      allTasks.filter((task) => task.selectedCategory.title === "Personal"),
    );
    setActiveBtn("All");
    setIsActiveButton("All Tasks");
  };
  const activePersonalTasks = () => {
    setIsActiveButton('')
    setActiveBtn("Active");
    const personalTasks = allTasks.filter(
      (task) => task.selectedCategory.title === "Personal",
    );
    const personalActiveTasks = personalTasks.filter(
      (task) => task.isCompleted === false,
    );
    setPersonalTasks(personalActiveTasks);
  };
  const completedPersonalTasks = () => {
    setActiveBtn("Completed");
    setIsActiveButton('Completed')
    const personalTasks = allTasks.filter(
      (task) => task.selectedCategory.title === "Personal",
    );
    const personalCompletedTasks = personalTasks.filter(
      (task) => task.isCompleted === true,
    );
    setPersonalTasks(personalCompletedTasks);
  };

  //sort handler

  const sortPersonalTasksNameHandler = () => {
    const pesonalTasks = allTasks.filter(
      (task) => task.selectedCategory.title === "Personal",
    );
    const sortTaskName = pesonalTasks.sort((a, b) =>
      a.titleTask.localeCompare(b.titleTask),
    );

    setSortChange("Task name");
    setPersonalTasks(sortTaskName);
  };

  const sortDateHandler = () => {
    setSortChange("Due Date");
    const personalTasksData = allTasks.filter(
      (task) => task.selectedCategory.title === "Personal",
    );
    const sortDueDate = personalTasksData.sort((a, b) =>
      b.startDate.localeCompare(a.startDate),
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

  const todayTaskHandler = () => {
    const today = new Date();
    const onlyToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    const allTasksLocal = [...allTasks];
    const personalTasks = allTasksLocal.filter(
      (task) => task.selectedCategory.title === "Personal",
    );
    const todayPersonalTasks = personalTasks.filter((task) => {
      const todayTasks = new Date(task.startDate);
      return (
        new Date(
          todayTasks.getFullYear(),
          todayTasks.getMonth(),
          todayTasks.getDate(),
        ).getTime() === onlyToday.getTime()
      );
    });
    setPersonalTasks(todayPersonalTasks);
    setIsActiveButton("Today");
        setActiveBtn('')

  };

  const UpComingHandler = () => {
    const today = new Date();
    const onlyToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    const allTaskLoc = [...allTasks];
    const personalTasks = allTaskLoc.filter(
      (task) => task.selectedCategory.title === "Personal",
    );
    const upComingPersonal = personalTasks.filter((task) => {
      const dateTasks = new Date(task.startDate);
      return (
        new Date(
          dateTasks.getFullYear(),
          dateTasks.getMonth(),
          dateTasks.getDate(),
        ).getTime() >= onlyToday.getTime()
      );
    });
    setPersonalTasks(upComingPersonal);
    setIsActiveButton("Upcoming");
    setActiveBtn('')
  };
const importantHandler=()=>{
  const allTaskLoc=[...allTasks]
  const personalAllTask=allTaskLoc.filter(task=>task.selectedCategory.title==='Personal')
  const importantPersonalTask=personalAllTask.filter(task=>task.isFavorite===true)
  setPersonalTasks(importantPersonalTask)
  setActiveBtn('')
    setIsActiveButton('Important')
  
}


  return (
    <>
      <NavbarPersonal count={personalTasks.length} />
      <Container className="mt-5 margin" style={{ maxWidth: "800px" }}>
        <Row>
          {showToast && <Toast content={contentToast} />}
          <Col>
            <ButtonGroupTasks
              onClickAllTasks={allTasksPersonalHandler}
              onClickActiveTasks={activePersonalTasks}
              onClickCompleted={completedPersonalTasks}
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
      <ButtonsAllTasks
        onClickToday={todayTaskHandler}
        onClickAllTasks={allTasksPersonalHandler}
        onClickUpcoming={UpComingHandler}
        onClickCompleted={completedPersonalTasks}
        onClickImportant={importantHandler}
        isActive={isActiveButton}
      />
      <AddButton />
    </>
  );
}

export default Personal;
