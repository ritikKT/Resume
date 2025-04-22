import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>&nbsp;
        <Card.Title>{""}</Card.Title>
        <Card.Title><span className="purple">  YouTube link(s)  </span></Card.Title>
        <Button variant="primary" href={props.ylink0} target="_blank">
          <BiLinkExternal /> &nbsp;
          {"Vedio - 1"}
        </Button><Card.Title>{""}</Card.Title>
        <GetVedioData is1st ={props.is1st} ylink1={props.ylink1} ylink2={props.ylink2} ylink3={props.ylink3} ylink4={props.ylink4}/>
        
      </Card.Body>
    </Card>
  );
}
function GetVedioData(props)
{
  console.log("Hello World"+props.is1st);
  if(props.is1st)
  {
    
    return <div><Button variant="primary" href={props.ylink1} target="_blank">
    <BiLinkExternal /> 
    {"Vedio - 2"}
  </Button>&nbsp;
  <Button variant="primary" href={props.ylink2} target="_blank">
    <BiLinkExternal /> 
    {"Vedio - 3"}&nbsp;
  </Button><Card.Title>{""}</Card.Title>
  <Button variant="primary" href={props.ylink3} target="_blank">
    <BiLinkExternal /> 
    {"Vedio - 4"}
  </Button>&nbsp;
  <Button variant="primary" href={props.ylink4} target="_blank">
    <BiLinkExternal /> 
    {"Vedio - 5"}
  </Button>&nbsp;
  </div>
  }else
  {
    return <div></div>
  }
}
//https://www.youtube.com/watch?v=1X4Vrmih27M
export default ProjectCards;
