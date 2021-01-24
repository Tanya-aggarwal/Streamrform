import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FancyCheckbox from "./FancyCheckbox"


function Carddiv(){
    return(
        <Container fluid style={{backgroundColor:"#E3E3E3 "}}>
        <Row>
    <Col xs={6}>
        <Row>
            <p className="title" style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"40px",marginBottom:"40px",paddingTop:"40px"}}>Plese select the waste type</p>
        </Row>
        <Row style={{paddingTop:"60px"}}>
        <Col xs={3}>
            <FancyCheckbox />
            <img src="https://i.ibb.co/KDBgxy7/white.png" style={{display:"block",marginLeft:"auto",marginRight:"auto"}}/>
           <b> <p ClassName="top" style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"18px",textAlign:"center"}}>Waste sharps including Metals </p> </b>
            <p  ClassName="bottom" style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"15px",textAlign:"center"}}>Ex-Needles, syringes with fixed needles, needles from needle tip cutter</p>
        </Col>
        <Col xs={3}>
        <FancyCheckbox />
            <img src="https://i.ibb.co/BCy8Cms/red.png" style={{display:"block",marginLeft:"auto",marginRight:"auto"}}/>
           <b> <p style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"18px",textAlign:"center"}}>Contaminated Wastes (Recyclable)</p> </b>
            <p style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"15px",textAlign:"center"}}>Ex-Wastes generated from disposable items such as tubing, bottles, intravenous tubes </p>
        </Col>
        <Col xs={3}>
        <FancyCheckbox />
            <img src="https://i.ibb.co/1XKVdwJ/yellow.png" style={{display:"block",marginLeft:"auto",marginRight:"auto"}}/>
           <b> <p style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"18px",textAlign:"center"}}>Solid/Chemical Wastes </p> </b>
            <p style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"15px",textAlign:"center"}}>Ex-Items contaminated with blood, body fluids like dressings, plaster casts.</p>
        </Col>
        <Col xs={3}>
        <FancyCheckbox />
            <img src="https://i.ibb.co/fYrK5TN/blue.png" style={{display:"block",marginLeft:"auto",marginRight:"auto"}}/>
           <b> <p style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"18px",textAlign:"center"}}>Glassware</p> </b>
            <p style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"15px",textAlign:"center"}}>Ex-Broken or discarded and contaminated glass including medicine vials </p>
        </Col>
        </Row>

    </Col>
    <Col xs={6}>
        <img src="https://s2.gifyu.com/images/11e3f535b37e6f8699.gif" />
    </Col>
  </Row>
</Container>
    )
}

export default Carddiv