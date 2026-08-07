import { Container } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import "./AddNewItem.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { IoMdTime } from "react-icons/io";
import { LuClipboardList } from "react-icons/lu";
import { HiPlusSmall } from "react-icons/hi2";
import TitleInput from "../../components/input/titleInput/TitleInput";
import DescriptionInput from "../../components/input/descriptionInput/DescriptionInput";
import CategoryPicker from "../../components/picker/categoryPicker/CategoryPicker";
import { useState } from "react";
import DatePicker from "../../components/picker/datePicker/DatePIcker";
import StartTimePicker from "../../components/picker/startTimePicker/StartTimePicker";
import EndTimePicker from "../../components/picker/endTimePicker/EndTimePicker";
import Reminder from "../../components/picker/reminder/Reminder";

function AddNewItem() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [titleTask, setTitleTask] = useState(null);

  const selectedCategoryHandler = (category) => {
    setSelectedCategory(category);
  };
  const titleTaskHandler = (title) => {
    setTitleTask(title);
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
                  <DatePicker />
                </Col>
                <Col>
                  <StartTimePicker />
                </Col>
              </Row>
              <Row>
                <Col>
                <EndTimePicker/>
                
                </Col>
                <Col>
                <Reminder/>
                </Col>
              </Row>
              <DescriptionInput />

              <Button className="buttonStyle">
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
