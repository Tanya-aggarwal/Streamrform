import React from "react"
import InputGroup from 'react-bootstrap/InputGroup'


function FancyCheckbox() {
    return(
        <div>
<div style={{marginBottom:"20px",marginLeft:"auto",marginRight:"auto"}}>
<InputGroup className="mb-3" style={{marginBottom:"20px",marginLeft:"auto",marginRight:"auto"}}>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" style={{width:"20px",height:"20px"}} />
     </InputGroup>
     
</div>
</div>
);
}

export default FancyCheckbox