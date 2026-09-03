import { Container } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import "./AddNewItem.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { LuClipboardList } from "react-icons/lu";
import { HiPlusSmall } from "react-icons/hi2";
import TitleInput from "../../components/input/titleInput/TitleInput";
import DescriptionInput from "../../components/input/descriptionInput/DescriptionInput";
import CategoryPicker from "../../components/picker/categoryPicker/CategoryPicker";
import { useState } from "react";
import StartTimePicker from "../../components/picker/startTimePicker/StartTimePicker";
import Reminder from "../../components/picker/reminder/Reminder";
import CustomSelectedDate from "../../components/picker/customSelectedDate/CustomSelectedDate";
import { setHours, setMinutes } from "date-fns";
import Swal from "sweetalert2";

function AddNewItem() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [titleTask, setTitleTask] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(
    setHours(setMinutes(new Date(), 30), 16),
  );
  const [reminder, setReminder] = useState(null);
  const [endTime, setEndTime] = useState(
    setHours(setMinutes(new Date(), 30), 16),
  );
  const [description, setDescription] = useState("");

  const selectedCategoryHandler = (category) => {
    setSelectedCategory(category);
  };
  const titleTaskHandler = (title) => {
    setTitleTask(title);
  };
  const selectedDateHandler = (date) => {
    setStartDate(date);
  };
  const startTimeHandler = (time) => {
    setStartTime(time);
  };
  const endTimeHandler = (endTime) => {
    setEndTime(endTime);
  };
  const reminderHandler = (reminderSet) => {
    setReminder(reminderSet);
  };
  const descriptionHandler = (desc) => {
    setDescription(desc);
  };
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [],
  );

  const addTaskItemHandler = () => {
     console.log("REMINDER STATE:", reminder);
    const newTask = {
      titleTask,
      selectedCategory,
      startDate,
      startTime,
      endTime,
      description,
      reminder,
      id: crypto.randomUUID(),
      isCompleted: false,
      isFavorite: false,
    };
         console.log("REMINDER STATE:", reminder);

    const newTasks = [...tasks, newTask];
console.log("NEW TASKS:", newTasks);    
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    Swal.fire({
      icon: "success",
      title: "Your task has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    setDescription("");

    setSelectedCategory("");
    setTitleTask("");
    setStartDate(new Date());
    setStartTime(setHours(setMinutes(new Date(), 30), 16));
    setReminder(null);
    setEndTime(setHours(setMinutes(new Date(), 30), 16));
  };

  return (
    <>
      <MyNavbar />
      <Container>
        <div className="taskContainer">
          <div className="taskBodyContent">
            <h2>Add New Task</h2>
            <div className="taskIcon">
              <LuClipboardList size={"50px"} />
              <div className="plussIcon">
                <HiPlusSmall size={"30px"} />
              </div>
            </div>
            <p className="description">Plan your work,get things done</p>
            <p className="color">
              Add the details of your task and <br /> stay on track.
            </p>
          </div>
          <div className="taskFormContent">
            <Form>
              <TitleInput onTitle={titleTaskHandler} title={titleTask} />
              <CategoryPicker
                onSelect={selectedCategoryHandler}
                categorySelected={selectedCategory}
              />

              <Row className="mb-3 my-2">
                <Col>
                  <CustomSelectedDate
                    onSelect={selectedDateHandler}
                    date={startDate}
                  />
                </Col>
                <Col>
                  <StartTimePicker
                    onSelect={startTimeHandler}
                    time={startTime}
                    title={"Start time"}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <StartTimePicker
                    onSelect={endTimeHandler}
                    time={endTime}
                    title={"End time(optional)"}
                  />
                </Col>
                <Col>
                  <Reminder onSelect={reminderHandler} setReminder={reminder} />
                </Col>
              </Row>
              <DescriptionInput
                onClick={descriptionHandler}
                descrip={description}
              />

              <Button className="buttonStyle" onClick={addTaskItemHandler}>
                {" "}
                <HiPlusSmall size={"30px"} /> Add Task
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AddNewItem;
