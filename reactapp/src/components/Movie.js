import React, {useState} from 'react';
import '../App.css';
import { 
  Button,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Badge,
  ButtonGroup,
 } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faVideo} from '@fortawesome/free-solid-svg-icons'

function Movie(props) {




  var changeLiked = (name, img) => {
    if(props.movieSee == true){
      props.handleClickDeleteMovieParent(name)
    } else {
      props.handleClickAddMovieParent(name, img)
    }
  }



  if(props.movieSee){
    var colorLike = {color: '#e74c3c',cursor:'pointer'}
  } else {
    var colorLike = {cursor:'pointer'}
  }



  return (
    <Col xs="12" lg="6" xl="4">
    <Card style={{marginBottom:30, height:"450px"}}>
    <CardImg style={{width:"100%", height:"200px"}}top src={props.movieImg} alt={props.movieTitre} />
    <CardBody>
       
 
       
  <CardTitle>{props.movieName}</CardTitle>
        <CardText>{props.movieDesc}</CardText>
        <p> Je veux suivre ! <FontAwesomeIcon style={colorLike} icon={faHeart} onClick={() => changeLiked(props.movieName,props.movieImg)} /></p>
    </CardBody>
    </Card>
    </Col>


  );
}

export default Movie;
