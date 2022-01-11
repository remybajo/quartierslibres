import React, {useState, useEffect} from 'react';
import {Redirect, Link } from 'react-router-dom';
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

function Accueil() {

  const [moviesCount,setMoviesCount] = useState(0)
  const [moviesWishList, setMoviesWishList] = useState([])
  const [popoverOpen, setPopoverOpen] = useState(false);
const [id, setId] = useState("")
  const toggle = () => setPopoverOpen(!popoverOpen);

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

  var eventData = [
    {name:"Concert", desc:"Connaître les concerts indépendants du quartier ", img:"/concert.jpeg"},
    {name:"Braderie", desc: "Connaître les braderies et vides grenis de mon quartier", img:"/braderie.jpeg"},
    {name:"Évènements", desc: "Connaître les évènements du quartiers", img:"/event.png"},
    
  ]

  var eventList = eventData.map((event,i) => {
    var result = moviesWishList.find(element => element.name == event.name)
    var isSee = false
    if(result != undefined){
      isSee = true
    }
    return(<Movie key={i} movieSee={isSee} handleClickDeleteMovieParent={handleClickDeleteMovie} handleClickAddMovieParent={handleClickAddMovie} movieName={event.name} movieDesc={event.desc} movieImg={event.img}  />)
  })

  var conceptData = [
   
    {name:"Caprices & Comédie", desc: "Connaître les dernières trouvailles de Caprices & Comédie pour vos enfants...et pour vous !", img:"/caprice.png"},
    {name:"Les folies douces", desc: "Connaitre la boutique idéale pour dénicher le cadeau de naissance original !", img:"/Folies.png"},
    {name:"Baan", desc: "Connaître Baan, LE magasin de décoration et ameublement des artisans indépendants", img:"/baan.png"},
  ]

  var conceptList = conceptData.map((concept,i) => {
    var result = moviesWishList.find(element => element.name == concept.name)
    var isSee = false
    if(result != undefined){
      isSee = true
    }
    return(<Movie key={i} movieSee={isSee} handleClickDeleteMovieParent={handleClickDeleteMovie} handleClickAddMovieParent={handleClickAddMovie} movieName={concept.name} movieDesc={concept.desc} movieImg={concept.img}  />)
  })

  var santeData = [
   
    {name:"Pharmacie Secretan", desc: "Connaître la Pharmacie Sécretan, ses évènements et ses conseils", img:"/pharmacie.jpeg"},
    {name:"Relax Bien-Être", desc: "Connaitre le centre Relax Bien-être et tout ce qu'il faut pour se sentir bien !", img:"/bienetre.png"},
  ]

  var santeList = santeData.map((sante,i) => {
    var result = moviesWishList.find(element => element.name == sante.name)
    var isSee = false
    if(result != undefined){
      isSee = true
    }
    return(<Movie key={i} movieSee={isSee} handleClickDeleteMovieParent={handleClickDeleteMovie} handleClickAddMovieParent={handleClickAddMovie} movieName={sante.name} movieDesc={sante.desc} movieImg={sante.img}  />)
  })

  var cultureData = [
   
    {name:"La Vache Bleue", desc: "Connaître la la vache bleue, espace culturel ou tous les arts sont bienvenus", img:"/vache.jpeg"},
    {name:"Le Doc", desc: "Connaître Le Doc, un espace de diffusion qui offre une approche singulière de la vie artistique", img:"/doc.jpeg"},
    {name:"La gare xp", desc: "Connaître La Gare XP, un espace qui soutient la création et la culture alternative", img:"/gare.jpeg"},
  ]

  var cultureList = cultureData.map((culture,i) => {
    var result = moviesWishList.find(element => element.name == culture.name)
    var isSee = false
    if(result != undefined){
      isSee = true
    }
    return(<Movie key={i} movieSee={isSee} handleClickDeleteMovieParent={handleClickDeleteMovie} handleClickAddMovieParent={handleClickAddMovie} movieName={culture.name} movieDesc={culture.desc} movieImg={culture.img}  />)
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
    console.log(body.result)
    var find = body.comSave._id

    if (body.result === true){
    setId(find) }

    console.log()
  }

if (id){
    return(
        <Redirect to={`/validation/${id}`}/>)
} else {
  
  


  return (

 
    <div style={{backgroundColor:"rgb(42 46 52)"}}>
   
      <Container>
      
      <Nav style={{backgroundColor:"#2a2a6a", width:"100%"}}>
          <span className="navbar-brand">
           
          </span>
          <NavItem>
          <NavLink style={{color:'white', fontWeight:"bold"}}>Quartiers Libres. Mon quartier mes choix.</NavLink>
          <Button > <Link to="/landing" style={{color:"white"}}> En savoir plus</Link> </Button> 
          </NavItem>
          <NavItem>
            <NavLink >
              <Button style={{marginRight:"10px"}} id="Popover1"  type="button">{moviesCount} choix </Button> 
              <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader>WishList</PopoverHeader>
                <PopoverBody>
                <ListGroup>
                {cardWish}
                </ListGroup>
                </PopoverBody>
              </Popover>
              <Button onClick={() => handleSubmit()} id="valider"  type="button">Valider la sélection </Button>
            
            </NavLink>
          </NavItem>
        </Nav>
        <p style={{color:"white", fontWeight:"bold"}}> Remettre nos quartiers au coeur de nos vies.  
 Choisissez qui vous voulez suivre, et recevez votre journal personnalisé toutes les 3 semaines :) </p>

 <div style={{backgroundColor: "rgb(255, 200, 0)"}}>
                <p style={{fontWeight:"bold"}}> Les évènements de mon quartier </p>
         </div>
    
        <Row>           
          {eventList}        
        </Row>
        <div style={{backgroundColor: "rgb(255, 200, 0)"}}>
                <p style={{fontWeight:"bold"}}> Les concepts Store</p>
         </div>   
        <Row>
          {conceptList}
        </Row>
        <div style={{backgroundColor: "rgb(255, 200, 0)"}}>
                <p style={{fontWeight:"bold"}}> Santé et Bien Être</p>
         </div>   
        <Row>
          {santeList}
        </Row>
        <div style={{backgroundColor: "rgb(255, 200, 0)"}}>
                <p style={{fontWeight:"bold"}}> Les centres culturels et artistiques </p>
         </div>   
        <Row>
          {cultureList}
        </Row>
      </Container>
    </div>
  );
}}

export default Accueil;
