import ReminderItem from "../../reminderItem/ReminderItem";
import "./ModalReminder.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalReminder({ onSelect, setReminder, onClose, isOpen }) {
  const reminderItems = [
    {
      id: 1,
      title: "No reminder",
      icon: "No reminder",
    },
    {
      id: 2,
      title: "In 15 minutes",
      icon: "timer",
    },
    {
      id: 3,
      title: "In 1 hour",
      icon: "timer",
    },
    {
      id: 4,
      title: "In 2 hours",
      icon: "timer",
    },
    {
      id: 5,
      title: "Tomorrow",
      spanTitle: "9:00 AM",
      icon: "calender",
    },
    {
      id: 6,
      title: "Tomorrow",
      spanTitle: "6:00 PM",
      icon: "calender",
    },
  ];
  return (
    <>
      <Modal show={isOpen} onHide={onClose} className=" customModal" dialogClassName="customModalDialog">
        <Modal.Header
          closeButton
          className="mx-2"
          style={{ borderBottom: "none" }}
        >
          <Modal.Title>Select reminder time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="buttonsContainer">
            {reminderItems.map(item=>(
              <ReminderItem key={item.id}   {...item} onSelect={ ()=>onSelect(item)} setReminder={setReminder} />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "none" }}>
          <Button className="buttonAddReminder" onClick={onClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalReminder;
