import './TitleInput.css'
import Form from "react-bootstrap/Form";

import { IoListOutline } from "react-icons/io5";

function TitleInput({onTitle,title}){
    return(
        <>
          <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label className="title">Title</Form.Label>
                <div className=".inputContainerStyle">
                  <i className="icon">
                    <IoListOutline size={"30px"} />
                  </i>
                  <Form.Control
                    placeholder="e.g Design meeting"
                    className="inputStyle"
                    type="text"
                    onChange={(e)=>onTitle(e.target.value)}
                    value={title}
                  />
                </div>
              </Form.Group>
        </>
    )
}

export default TitleInput