import React, {useState, useEffect} from 'react';

import {Link } from 'react-router-dom';
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
import './App.css';

function Landing () {
    
 
    return (
<div style={{backgroundColor:"rgb(42 46 52)", height:"2000px"}}>
<Nav style={{backgroundColor:"#2a2a6a"}}>
          <span className="navbar-brand">
        
          </span>
          <NavItem>
            <NavLink style={{color:'white', fontWeight:"bold"}}>Quartiers Libres. Mon quartier mes choix.</NavLink>
          </NavItem>
          <Button > <Link to="/"  style={{color:"black"}}> Accueil </Link> </Button>
          </Nav>
<div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <h3 style={{color:"white"}}> Quartiers Libres qu'est ce que c'est ? </h3>
          <br/>
          <br/>
<p style={{color:"white", fontWeight:"bold"}}> Remettre les commerçants au cœur des activités du quartier.  On parle beaucoup d’économie circulaire sur l’alimentation, mais l’économie circulaire <br/> c’est aussi allez chez son fleuriste, chez son libraire, aux concerts de son quartier ! 
</p>
<br/>

                <p style={{color:"white"}}> Aujourd'hui pour suivre nos commerçants on va aller sur les réseaux sociaux. Problème : <br/> 
                on suit tellement de monde sur les réseaux que les algorithmes ne nous montrent pas nos commerçants de quartiers.</p> <br/> <br/>
<h4 style={{color:"black", backgroundColor:"gb(255, 200, 0)", width:"100%", textAlign:"center"}}> Et concrètement ? </h4>
<br/>
<br/>
          </div>
          <div style={{color:"white", display:"flex", justifyContent: "space-evenly"}}>
              <div style={{display:"flex", justifyContent: "flexStart", flexDirection:"column", alignItems:"center"}}>
              <h3> Pour les commerçants </h3> <br/>
              <p> Leur permettre d'avoir un canal de communication direct avec les habitants du quartiers ! <br/>
                Leur permettre de faire découvrir leur métier, leurs produits autrement et simplement </p>
                
              </div>
              <br/>
              <div style={{display:"flex", justifyContent: "center", flexDirection:"column", alignItems:"center"}}>
              <h3> Pour les habitants </h3> <br/>
              <p> Proposer une plateforme qui permet aux habitants de suivre les commerçants <br/> de leurs quartiers et de leur choix. Sans publicité et sans algorithmes basés sur les données. <br/>
             Pour cela rien de plus simple ! Vous sélectionnez dans la liste les  <br/> commerçants et associations que vous voulez suivre. <br/>
            Vous recevez toutes les 3 semaines votre journal personnalisé avec UNIQUEMENT votre sélection </p>
         </div>
          </div>
<br/>
<br/>

          <h4 style={{color:"black", backgroundColor:"gb(255, 200, 0)", width:"100%", textAlign:"center"}}> Je souhaite participer !  </h4>
   
          <div style={{color:"white", display:"flex", justifyContent: "space-evenly"}}>
              <div style={{display:"flex", justifyContent: "flexStart", flexDirection:"column", alignItems:"center"}}>
              <h3> Pour les commerçants </h3> <br/>
              <p> Envoyez nous un mail a quartierslibres@gmail.com <br/>
              Ou appelez nous au 06 78 15 56 36 </p>
                
              </div>
              <br/>
              <div style={{display:"flex", justifyContent: "center", flexDirection:"column", alignItems:"center"}}>
              <h3> Pour les habitants </h3> <br/>
              <p> Sélectionnez vos choix </p>
              <Button > <Link to="/"  style={{color:"black"}}> Accueil </Link> </Button>
         </div>
          </div>
</div>
    )
}

export default Landing;