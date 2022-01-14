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
    {name:"Concerts", desc:"Connaître les concerts indépendants du quartier ", img:"/concert.jpeg"},
    {name:"Braderies", desc: "Connaître les braderies et vides greniers de mon quartier", img:"/braderie.jpeg"},
    {name:"Évènements", desc: "Connaître les évènements du quartier", img:"/event.png"},
    
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
   
    {name:"Caprices & Comédies", desc: "Connaître les dernières trouvailles de Caprices & Comédie pour vos enfants...et pour vous !", img:"/caprice.png"},
    {name:"Les folies douces", desc: "Connaitre la boutique idéale pour dénicher le cadeau de naissance original !", img:"/Folies.png"},
    {name:"Baan", desc: "Connaître Baan, LE magasin de décoration et ameublement des artisans indépendants", img:"/baan.png"},
    {name:"Positive Shop", desc: "Connaitre positive Shop Un concept store qui booste l'entrepreneuriat des petits budgets ? C'est le pari que les équipes de Positive Planet ont tenu à relever !", img:"/Positiveshop.png"},
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
   
    {name:"Pharmacie Secretan", desc: "Connaître la Pharmacie Sécretan, ses évènements et ses conseils santé", img:"/pharmacie.jpeg"},
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
   
    {name:"La Vache Bleue", desc: "Connaître la vache bleue, espace culturel ou tous les arts sont bienvenus", img:"/vache.jpeg"},
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

  var bijouxData = [
   
    {name:"BDM Studio", desc: "Connaitre BDM studio, des bijoux avec de la fougue, de l’espoir et de l’imagination au cœur de la création de ce jeune Label.", img:"/bdm.png"},
    {name:"Judith Benithia", desc: "Connaître la bijouterie Benitihia : Une place importante laissée au temps et à l'inattendu, un juste équilibre entre formes, textures et couleur. ", img:"judith.png"},
    {name:"La Bijouterie Noah", desc: "La joaillerie Noah vous accompagneront lors de la fabrication sur mesure et réaliseront avec passion les pièces uniques que vous avez imaginées.", img:"/bijouterienoah.png"},
  ]

  var bijouxList = bijouxData.map((bijoux,i) => {
    var result = moviesWishList.find(element => element.name == bijoux.name)
    var isSee = false
    if(result != undefined){
      isSee = true
    }
    return(<Movie key={i} movieSee={isSee} handleClickDeleteMovieParent={handleClickDeleteMovie} handleClickAddMovieParent={handleClickAddMovie} movieName={bijoux.name} movieDesc={bijoux.desc} movieImg={bijoux.img}  />)
  })

  var potterieData = [
   
    {name:"L'argilerie", desc: "Connaître l'argilerie une association de découverte et de production de potterie et céramique.", img:"/largile.png"},
    {name:"Ceramique Lascève", desc: "Connaitre l'atelier Céramique Lascèvees domaines de prédilections sont l’art de la table et les luminaires en utilisant des terres de faïence, grès et porcelaine.", img:"ceramique.png"},
    {name:"La Bijouterie Noah", desc: "Connaître Malo, l'atelier de céramiques d'Emilie Brichard. Les pièces sont tournées en petites séries et tout le processus de fabrication est entièrement réalisé à la main.", img:"malo.png"},
  ]

  var potterieList = potterieData.map((potterie,i) => {
    var result = moviesWishList.find(element => element.name == potterie.name)
    var isSee = false
    if(result != undefined){
      isSee = true
    }
    return(<Movie key={i} movieSee={isSee} handleClickDeleteMovieParent={handleClickDeleteMovie} handleClickAddMovieParent={handleClickAddMovie} movieName={potterie.name} movieDesc={potterie.desc} movieImg={potterie.img}  />)
  })

  var peintreData = [
   
    {name:"Peintre sans Frontières", desc: "Connaître Peintre sans Frontières et ses incroyables tableaux", img:"/peintre.png"},
    {name:"Ly-Rose	", desc: "Connaître Ly-Roze, atelier de peinture stage et expositions ! ", img:"Lyrose.jpeg"},
    
  ]

  var peintreList = peintreData.map((peintre,i) => {
    var result = moviesWishList.find(element => element.name == peintre.name)
    var isSee = false
    if(result != undefined){
      isSee = true
    }
    return(<Movie key={i} movieSee={isSee} handleClickDeleteMovieParent={handleClickDeleteMovie} handleClickAddMovieParent={handleClickAddMovie} movieName={peintre.name} movieDesc={peintre.desc} movieImg={peintre.img}  />)
  })

  var galerieData = [
   
    {name:"D Galerie", desc: "Connaître D Galerie une galerie d'experiences artistiques, intermittente et nomade.", img:"/Dgalerie.png"},
    {name:"Atelier d'artistes Belleville", desc: "Connaitre l’association des Ateliers d’Artistes de Belleville (Les AAB) qui rassemble plus de 250 artistes s’inscrivant dans le champ des arts visuels et installés dans le quartier de Belleville", img:"bellville.png"},
    {name:"Le P'Art King", desc: "Connaitre le P'Art King, une galerie d'art qui vous fera découvrir peinture, désign, dessin et tant d'autres choses !", img:"part.png"},
    
  ]

  var galerieList = galerieData.map((galerie,i) => {
    var result = moviesWishList.find(element => element.name == galerie.name)
    var isSee = false
    if(result != undefined){
      isSee = true
    }
    return(<Movie key={i} movieSee={isSee} handleClickDeleteMovieParent={handleClickDeleteMovie} handleClickAddMovieParent={handleClickAddMovie} movieName={galerie.name} movieDesc={galerie.desc} movieImg={galerie.img}  />)
  })

  var musiqueData = [
   
    {name:"Philarmonie De Paris", desc: "Connaitre la Philarmonie de Paris, le nouveau cœur musical de la capitale. ", img:"/philarmonie.jpeg"},
    {name:"Le Trabendo", desc: "Connaître le Trabendo, une belle salle de concert parisienne, agrémentée d’une vaste terrasse.", img:"trabendo.jpeg"},
    {name:"Le Cabaret Sauvage", desc: "Connaître le Cabaret sauvage et sa programmation très diversifiée qui accueille des artistes venus des quatre coins du monde, pour des concerts, des spectacles de cabaret, des bals...", img:"cabaret.jpeg"},
    
  ]

  var musiqueList = musiqueData.map((musique,i) => {
    var result = moviesWishList.find(element => element.name == musique.name)
    var isSee = false
    if(result != undefined){
      isSee = true
    }
    return(<Movie key={i} movieSee={isSee} handleClickDeleteMovieParent={handleClickDeleteMovie} handleClickAddMovieParent={handleClickAddMovie} movieName={musique.name} movieDesc={musique.desc} movieImg={musique.img}  />)
  })

  var cultureData = [
   
    {name:"Le Magasin du Dragon", desc: "Connaitre La Maison du Dragon La boutique spécialiste des jeux de société, de cartes, de rôle et de figurines", img:"/dragon.jpeg"},
    {name:"Le Centquatre", desc: "Connaître le Centquatre un établissement public de coopération culturelle", img:"104.jpeg"},
    {name:"ActeIf", desc: "Connaître ActeIf, des lieux qui accompagnent la création contemporaine et défendent la diversité artistique et culturelle à travers une éthique du partage et des dynamiques collectives.", img:"acteif.png"},
    
  ]

  var musiqueList = musiqueData.map((musique,i) => {
    var result = moviesWishList.find(element => element.name == musique.name)
    var isSee = false
    if(result != undefined){
      isSee = true
    }
    return(<Movie key={i} movieSee={isSee} handleClickDeleteMovieParent={handleClickDeleteMovie} handleClickAddMovieParent={handleClickAddMovie} movieName={musique.name} movieDesc={musique.desc} movieImg={musique.img}  />)
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
    setId(find)
    var rawResponse = await fetch(`/validation?id=${find}`);
    var response = await rawResponse.json();
    console.log(response); }

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
              <Button style={{marginRight:"10px"}} id="Popover1"  type="button">{moviesCount} Sélectionnés </Button> 
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
        <p style={{color:"black", fontWeight:"bold", backgroundColor:"white", height:"60px", marginTop : "20px"}}> Remettre nos quartiers au coeur de nos vies.  
 Choisissez qui vous voulez suivre, et recevez votre journal personnalisé tous les mois :) </p>



 <div style={{backgroundColor: "rgb(255, 200, 0)", height:"40px", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"10px"}}>
                <p style={{fontWeight:"bold"}}> Les évènements de mon quartier </p>
         </div>
    
        <Row>           
          {eventList}        
        </Row>

        <div style={{backgroundColor: "rgb(255, 200, 0)", height:"40px", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"10px"}}>
                <p style={{fontWeight:"bold"}}> Les évènements de mon quartier </p>
         </div>
    
        <Row>           
          {bijouxList}        
        </Row>
        <div style={{backgroundColor: "rgb(255, 200, 0)", height:"40px", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"10px"}}>
                <p style={{fontWeight:"bold"}}> Les concepts Store</p>
         </div>   
        <Row>
          {conceptList}
        </Row>
        <div style={{backgroundColor: "rgb(255, 200, 0)", height:"40px", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"10px"}}>
                <p style={{fontWeight:"bold"}}> Les centres culturels et artistiques </p>
         </div>   
        <Row>
          {cultureList}
        </Row>
        <div style={{backgroundColor: "rgb(255, 200, 0)", height:"40px", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"10px"}}>
                <p style={{fontWeight:"bold"}}> Les centres culturels et artistiques </p>
         </div>   
        <Row>
          {galerieList}
        </Row>
        <div style={{backgroundColor: "rgb(255, 200, 0)", height:"40px", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"10px"}}>
                <p style={{fontWeight:"bold"}}> Les centres culturels et artistiques </p>
         </div>   
        <Row>
          {musiqueList}
        </Row>
        <div style={{backgroundColor: "rgb(255, 200, 0)", height:"40px", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"10px"}}>
                <p style={{fontWeight:"bold"}}> Santé et Bien Être</p>
         </div>   
        <Row>
          {peintreList}
        </Row>
        <div style={{backgroundColor: "rgb(255, 200, 0)", height:"40px", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"10px"}}>
                <p style={{fontWeight:"bold"}}> Santé et Bien Être</p>
         </div>   
        <Row>
          {potterieList}
        </Row>
        <div style={{backgroundColor: "rgb(255, 200, 0)", height:"40px", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"10px"}}>
                <p style={{fontWeight:"bold"}}> Les centres culturels et artistiques </p>
         </div>   
        <Row>
        {santeList}
        </Row>
      </Container>
    </div>
  );
}}

export default Accueil;
