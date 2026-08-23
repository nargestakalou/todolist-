import { Container, Row, Col } from "react-bootstrap";
import AllTasksNavbar from "../../components/allTsksNavbar/AllTasksNavbar";
import TaskCard from "../../components/taskCard/TaskCard";
import "./AllTask.css";
import ButtonGroupTasks from "../../components/buttonGroupTasks/ButtonGroupTasks";
import SortAllTask from "../../components/sortAllTasks/SortAllTask";
import ButtonsAllTasks from "../../components/buttonsAllTasks/ButtonsAllTasks";
import AddButton from "../../components/addButton/AddButton";
import { useState } from "react";
function AllTask() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [isActiveButton, setIsActiveButton] = useState('All Tasks');
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
    setIsActiveButton("Today")
  };
  const allTasksHandler = () => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
    setIsActiveButton('All Tasks')
  };

  return (
    <>
      <AllTasksNavbar />
      <Container className="mt-5" style={{ maxWidth: "800px" }}>
        <Row>
          <Col>
            <ButtonGroupTasks />
          </Col>
        </Row>
        <SortAllTask />

        <Row className=" row-cols-12 row-cols-md-1">
          {tasks.map((task) => (
            <Col key={task.length}>
              <TaskCard {...task} />
            </Col>
          ))}
        </Row>
      </Container>
      <ButtonsAllTasks
        onClickToday={todayTaskaHandler}
        onClickAllTasks={allTasksHandler}
        isActive={isActiveButton}
      />

      <AddButton />
    </>
  );
}

export default AllTask;
