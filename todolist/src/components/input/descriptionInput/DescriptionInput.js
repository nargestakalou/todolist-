import { useState } from "react";
import "./DescriptionInput.css";
import Form from "react-bootstrap/Form";
import { BsTextParagraph } from "react-icons/bs";

function DescriptionInput({onClick}) {
  
  return (
    <>
      <Form.Group className="mb-3 mt-2" controlId="formGridAddress1">
        <Form.Label className="title">Description(optional)</Form.Label>
        <div>
          <i className="icon">
            <BsTextParagraph size={"30px"} />
          </i>
          <Form.Control
            placeholder="Add more deftails about this task..."
            className="inputStyle inputArea"
            as="textarea"
            
            onChange={(e)=>onClick(e.target.value)}
          />
        </div>
      </Form.Group>
    </>
  );
}

export default DescriptionInput;
