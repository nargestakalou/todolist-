import { Button, Container } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import "./EditItem.css";
import { LuClipboardList } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import TitleInput from "../../components/input/titleInput/TitleInput";
import Form from "react-bootstrap/Form";
import CategoryPicker from "../../components/picker/categoryPicker/CategoryPicker";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CustomSelectedDate from "../../components/picker/customSelectedDate/CustomSelectedDate";
import StartTimePicker from "../../components/picker/startTimePicker/StartTimePicker";
import Reminder from "../../components/picker/reminder/Reminder";
import DescriptionInput from "../../components/input/descriptionInput/DescriptionInput";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

function EditItem() {
  const loc = useLocation();
  const selectedTask = loc.state;
  const [editTask, setEditTask] = useState(selectedTask);
const navigate=useNavigate()
  const editTitleHandler = (editTitle) => {
    setEditTask({ ...editTask, titleTask: editTitle });
  };

  const editCategoryHandler = (editCategory) => {
    setEditTask({ ...editTask, selectedCategory: editCategory });
  };
  const editDateHandler = (editDate) => {
    setEditTask({ ...editTask, startDate: editDate });
  };

  const editStartTimeHandler = (editStartTime) => {
    setEditTask({ ...editTask, startTime: editStartTime });
  };
  const editEndTimeHandler=(editEndTime)=>{
    setEditTask({...editTask,endTime:editEndTime})
  }
  const editREminderHandler=(editReminder)=>{
    setEditTask({...editTask,reminder:editReminder})
  }
  const editDescriptionHandler=(editDescriotion)=>{
    setEditTask({...editTask,description:editDescriotion})
  }

const editTaskHandler=()=>{
  const allTasks=JSON.parse(localStorage.getItem('tasks'))
  const changeAllTasks=allTasks.map(task=>task.id===editTask.id?editTask:task)
  localStorage.setItem('tasks',JSON.stringify(changeAllTasks))
  Swal.fire({
    icon:'success',
    title:'Task updated successfully!',
    showCancelButton:false,
    timer:1500
  })
  navigate('/allTask')
}



  return (
    <>
      <MyNavbar />
      <Container>
        <div className="taskContainer">
          <div className="taskBodyContent">
            <h2>Edit Your Task</h2>
            <div className="taskIcon">
              <LuClipboardList size={"50px"} />
              <div className="plussIcon">
                <CiEdit size={30} />
              </div>
            </div>
            <p className="description">Plan your work,get things done</p>
            <p className="color">
              Edit the details of your task and <br /> stay on track.
            </p>
          </div>
          <div className="taskFormContent">
            <Form>
              <TitleInput
                title={editTask.titleTask}
                onTitle={editTitleHandler}
              />
              <CategoryPicker
                categorySelected={editTask.selectedCategory}
                onSelect={editCategoryHandler}
              />
              <Row className="mb-3 my-2">
                <Col>
                  <CustomSelectedDate
                    date={editTask.startDate}
                    onSelect={editDateHandler}
                  />
                </Col>
                <Col>
                  <StartTimePicker
                    time={editTask.startTime}
                    title={"Start time"}
                    onSelect={editStartTimeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                <StartTimePicker  
                title={'End time(optional)'}
                time={editTask.endTime}
                onSelect={editEndTimeHandler}
                
                />
                </Col>
                <Col>
                  <Reminder  setReminder={editTask.reminder}  onSelect={editREminderHandler} />
                </Col>
              </Row>
              <DescriptionInput
              
              descrip={editTask.description}
              onClick={editDescriptionHandler}
              
              
              />
              <Button className="buttonStyle" onClick={editTaskHandler}>
                <span style={{ paddingRight: "5px" }}>
                  <CiEdit size={30} />
                </span>
                <span>Edite Task</span>
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default EditItem;
