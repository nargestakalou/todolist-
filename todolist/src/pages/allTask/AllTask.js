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
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [isActiveButton, setIsActiveButton] = useState("All Tasks");
  const [sortChange, setSortChange] = useState("default");
  const [activeBtn, setActiveBtn] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const[showToast,setShowToast]=useState(false)
  const [contentToast,setContentToast]=useState('')
  const [selectedTaskEdit,setSelectedTaskEdit]=useState(null)
  const todayTaskaHandler = () => {
    const today = new Date();
    const todayOnly = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    const todayTasks = tasks.filter((task) => {
      const taskDate = new Date(task.startDate);
      return (
        new Date(
          taskDate.getFullYear(),
          taskDate.getMonth(),
          taskDate.getDate(),
        ).getTime() === todayOnly.getTime()
      );
    });

    setTasks(todayTasks);
    setIsActiveButton("Today");
  };


  const allTasksHandler = () => {
    setSelectedCategory(null);
    setTasks(JSON.parse(localStorage.getItem("tasks")));
    setIsActiveButton("All Tasks");
    setActiveBtn("All");
  };
  const activeBtnHandler = () => {
    setActiveBtn("Active");

      const allTasks  =JSON.parse(localStorage.getItem("tasks"));

    const isActiveTasks = allTasks.filter((task) => task.isCompleted === false);
    setTasks(isActiveTasks);
  };
  const UpComingHandler = () => {
    setIsActiveButton("Upcoming");

    const today=new Date()
    const onlyToday=new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    ).getTime()

     const allTasks  =JSON.parse(localStorage.getItem("tasks"));

    const upComingTasks=allTasks.filter(task=>{
      const taskDate=new Date(task.startDate)
      return(
        new Date(
          taskDate.getFullYear(),
          taskDate.getMonth(),
          taskDate.getDate()
        ).getTime()>=onlyToday
      )
    })
    console.log(upComingTasks);
    
    setTasks(upComingTasks)
    

  };
  const CompletedHandler = () => {

    setIsActiveButton("Completed");
    setActiveBtn("Completed");
      const allTasks=  JSON.parse(localStorage.getItem("tasks"));

    const isCompeletedtasks = allTasks.filter(
      (task) => task.isCompleted === true,
    );
    setTasks(isCompeletedtasks);
  };
  const ImportantHandler = () => {
    setIsActiveButton("Important");
    const allTask=JSON.parse(localStorage.getItem('tasks'))
    const isFavoritetasks=allTask.filter(task=>task.isFavorite===true)
    setTasks(isFavoritetasks)



  };
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

  // useEffect(()=>{
  //   const newTasks=[...tasks]
  //   const newTasksCategory=newTasks.filter(task=>task.selectedCategory.title==categorySelected)
  //   setTasks(newTasksCategory)
  // },
  // [categorySelected])

  const categoryTasksHandler = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  //popupHandler

  const isCompletedhandler = (taskId) => {
      const allTasks  =JSON.parse(localStorage.getItem("tasks"));
    const completedTask = allTasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: true } : task,
    );
    setTasks(completedTask);
    localStorage.setItem("tasks", JSON.stringify(completedTask));
        setShowToast(true)
        setContentToast('Task completed!')
    setTimeout(()=>setShowToast(false),5000)

  };

  const isFavoriteHandler = (taskId) => {
          const allTasks  =JSON.parse(localStorage.getItem("tasks"));

    const favoriteTask = allTasks.map((task) =>
      task.id === taskId ? { ...task, isFavorite: true } : task,
    );
    setTasks(favoriteTask);
    localStorage.setItem("tasks", JSON.stringify(favoriteTask));
    setShowToast(true)
    setContentToast('Added to favorites')
    setTimeout(()=>setShowToast(false),5000)

  };
const deletTaskHandler=(taskId)=>{
  Swal.fire({
    title:'Are you sure?',
    icon:'warning',
    showCancelButton:true,
    confirmButtonColor:'#3085d6',
    cancelButtonColor:'#d33',
    confirmButtonText:'Yes, delete this! '
  }).then((result)=>{
    if(result.isConfirmed){
      const allTasks=JSON.parse(localStorage.getItem('tasks'))
      const deletTask=allTasks.filter(task=>task.id!==taskId)
      setTasks(deletTask)
      localStorage.setItem('tasks',JSON.stringify(deletTask))
      setShowToast(true)
      setContentToast('Task deleted successfully!')
      setTimeout(()=>setShowToast(false),5000)

    }
  })
}
const navigate=useNavigate()
const editTaskHandler=(taskId)=>{
const allTasks=JSON.parse(localStorage.getItem('tasks'))
const selectedTask=allTasks.find(task=>task.id===taskId)

setSelectedTaskEdit(selectedTask)

  navigate('/editItem',{
    state:selectedTask
  })

}


  //groupButtonHandler

  //  const isActiveHandler=()=>{
  //   const newTasks=[...tasks]
  //   const isActiveTasks=newTasks.filter(tasks=>task.isCompeleted==false)
  //   console.log(isActiveTasks);

  //  }

  return (
    <>
      <AllTasksNavbar
        sortHandler={sortTasksNameHandler}
        sortDateHandler={sortDueDateHandler}
        count={tasks.length}
        categoryHandler={categoryTasksHandler}
      />
      <Container className="mt-5 margin" style={{ maxWidth: "800px" }}>
        <Row>
                  {showToast&&<Toast content={contentToast} />}

          <Col>
            <ButtonGroupTasks
              onClickAllTasks={allTasksHandler}
              onClickActiveTasks={activeBtnHandler}
              onClickCompleted={CompletedHandler}
              ative={activeBtn}
            />
          </Col>
        </Row>
        <SortAllTask
          sortHandler={sortTasksNameHandler}
          sortTitle={sortChange}
          sortDateHandler={sortDueDateHandler}
        />

        <Row className=" row-cols-12 row-cols-md-1">
          {selectedCategory
            ? tasks
                .filter(
                  (task) => task.selectedCategory.title === selectedCategory,
                )
                .map((task) => (
                  <Col key={task.id}>
                    <TaskCard {...task} />
                  </Col>
                ))
            : tasks.map((task) => (
                <Col key={task.id}>
                  <TaskCard
                    {...task}
                    isCompletedhandler={isCompletedhandler}
                    isFavoriteHandler={isFavoriteHandler}
                    deletTaskHandler={deletTaskHandler}
                    editTaskHandler={editTaskHandler}
                  />
                </Col>
              ))}
          {/* {tasks.map((task) => (
            <Col key={task.length}>
              <TaskCard {...task} />
            </Col>
          ))} */}
        </Row>
      </Container>
      <ButtonsAllTasks
        onClickToday={todayTaskaHandler}
        onClickAllTasks={allTasksHandler}
        onClickUpcoming={UpComingHandler}
        onClickCompleted={CompletedHandler}
        onClickImportant={ImportantHandler}
        isActive={isActiveButton}
      />

      <AddButton />
    </>
  );
}

export default AllTask;
