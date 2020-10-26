import React from 'react'
import {Container,Col,Row,FormControl,InputGroup,Button}from 'react-bootstrap'
import image from '../assets/credit-score-background-image.png'
import apple from '../assets/apple.png'
import google from '../assets/google.png'


function Home() {
    return (
        <Container className="mt-5">
  <Row>
    <Col sm={8} className="m-auto text-left"><h2 className="mb-4">Your credit, sorted.</h2>
    <h6>Check your Credit Score 
      <br></br>
      & Unlock your Borrowing power.</h6>
    <p className="mt-4">A better score means a better deals.</p>
  
    <Col sm={8} className="mt-5"><InputGroup><FormControl className="input-form"
      placeholder="Enter your mobile number"
      
    /><InputGroup.Append>
      <Button className="form-btn" variant="light">CHECK MY SCORE</Button>
    </InputGroup.Append>
  </InputGroup></Col></Col>
    <Col sm={4} className=" m-auto"style={{position:'relative'}}><img src={image} width="400" height="370"/>
    
    <div className="circle">
    <div className="inner-circle">
        <h5 className="text-center">Get your</h5>
        <h3 className="text-center">AECB Credit Score</h3>
        <h1 className="text-center"><strong>720</strong></h1>
        <h5 className="text-center">Out of 900</h5>
    </div>
    </div>
<div className="footer"><img src={google} /> 
       <img src={apple} /></div>


    </Col>
    
  </Row>
  </Container>

        
    )
}

export default Home
