import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { 
  Container,
  Row,
  Button,
  Nav,
  NavItem,
  NavLink,
  Popover,
  PopoverHeader,
  PopoverBody,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,

 } from 'reactstrap';
 import {Modal,  } from "antd";
import Movie from './components/Movie'

function App() {

  const [moviesCount,setMoviesCount] = useState(0)
  const [moviesWishList, setMoviesWishList] = useState([])
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
 
var resultat = [];
  

  var handleClickAddMovie = (name, img) => {
    setMoviesCount(moviesCount+1)
    setMoviesWishList([...moviesWishList, {name:name,img:img}])
    
  }
 

  var handleClickDeleteMovie = (name) => {
    setMoviesCount(moviesCount-1)
    setMoviesWishList(moviesWishList.filter(object => object.name != name))
  }

  var cardWish = moviesWishList.map((movie,i) => {
    return (
      <ListGroupItem>
        <ListGroupItemText onClick={() => {handleClickDeleteMovie(movie.name)}}>
        <img width="25%" src={movie.img} /> {movie.name}
        </ListGroupItemText>
      </ListGroupItem>
    )
  })

  var moviesData = [
    {name:"Star Wars : L'ascension de Skywalker", desc:"La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette ...", img:"/starwars.jpg", note:6.7, vote:5},
    {name:"Maléfique : Le pouvoir du mal", desc: "Plusieurs années après avoir découvert pourquoi la plus célèbre méchante Disney avait un cœur ...", img:"/maleficent.jpg", note:8.2, vote:3},
    {name:"Jumanji: The Next Level", desc: "L’équipe est de retour, mais le jeu a changé. Alors qu’ils retournent dans Jumanji pour secourir ...", img:"/jumanji.jpg", note:4, vote:5},
    {name:"Once Upon a Time... in Hollywood", desc: "En 1969, Rick Dalton – star déclinante d'une série télévisée de western – et Cliff Booth ...", img:"/once_upon.jpg", note:6, vote:7},
    {name:"La Reine des neiges 2", desc: "Elsa, Anna, Kristoff, Olaf et Sven voyagent bien au-delà des portes d’Arendelle à la recherche de réponses ...", img:"/frozen.jpg", note:4.6, vote:3},
    {name:"Terminator: Dark Fate", desc: "De nos jours à Mexico. Dani Ramos, 21 ans, travaille sur une chaîne de montage dans une usine automobile...", img:"/terminator.jpg", note:6.1, vote:1},
  ]

  var movieList = moviesData.map((movie,i) => {
    var result = moviesWishList.find(element => element.name == movie.name)
    var isSee = false
    if(result != undefined){
      isSee = true
    }
    return(<Movie key={i} movieSee={isSee} handleClickDeleteMovieParent={handleClickDeleteMovie} handleClickAddMovieParent={handleClickAddMovie} movieName={movie.name} movieDesc={movie.desc} movieImg={movie.img} globalRating={movie.note} globalCountRating={movie.vote} />)
  })

  var handleSubmit = async () => {
  
    for (var i =0; i < moviesWishList.length; i++){
    resultat.push(moviesWishList[i].name) }
    
  
    var data = await fetch('/wishlist-movie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `nameFromFront=${resultat}`
       
       
    })
    const body = await data.json()
    console.log(body)
  }
  


  return (

 
    <div style={{backgroundColor:"#232528"}}>
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
      <Container>
      
        <Nav>
          <span className="navbar-brand">
            <img src="./logo.png" width="30" height="30" className="d-inline-block align-top" alt="logo" />
          </span>
          <NavItem>
            <NavLink style={{color:'white'}}>Last Releases</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Button id="Popover1"  type="button">{moviesCount} films</Button>
              <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader>WishList</PopoverHeader>
                <PopoverBody>
                <ListGroup>
                {cardWish}
                </ListGroup>
                </PopoverBody>
              </Popover>
              <Button onClick={() => showModal()} id="valider"  type="button"> Valider la sélection </Button>
            
            </NavLink>
          </NavItem>
        </Nav>
        <Row>
          {movieList}
         
        </Row>
     
      </Container>
    </div>
  );
}

export default App;
