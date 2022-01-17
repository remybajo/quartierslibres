import React, {useState, useEffect} from 'react';
import { Redirect, useParams, Link } from 'react-router-dom';

import { 
Input,
    Button,
    Nav,
    NavItem,
    NavLink,
    Modal, ModalBody, ModalHeader,
 Card,
 CardBody,
  
   } from 'reactstrap';
import './App.css';

function Validation () {
   
  const  [revoir, setRevoir] = useState(false)
  const [article, setArticle] = useState()
  const [email, setEmail] = useState("")
const [open, setOpen] = useState(true)

  var { id } = useParams();
  useEffect(() => {
        const ProfilComment = async () => {
            var rawResponse = await fetch(`/validation?id=${id}`);
            var response = await rawResponse.json();
         setArticle(response.resultat)
      
        };
        ProfilComment();
        // cherche()
      }, []);

 
        
    var handleSubmitMail = async () => {
       setRevoir(true)
        const data = await fetch(`/email?id=${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `email=${email}`
            
        }
        )
        return (<Link to="/"/>) }
            

    if (revoir){
        return (<Modal isOpen={open} toggle={() => setOpen(false)}>
        <ModalHeader>
          Votre Mail à bien été pris en compte
        </ModalHeader>
        <ModalBody>
          Vous recevrez dans 15 jours votre premier journal !
          <Button style={{textAlign:"center"}}> <Link style={{backgroundColor:"grey"}} to="/" style={{color:"black"}}> Valider </Link> </Button>
        </ModalBody>

      </Modal>)
    }
   
  

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
          <h5 style={{fontWeight:"bold", color:"white", textAlign:"center"}}> Vous Avez Choisis ces structures : </h5>
  
         <Card>

        <CardBody style={{fontWeight:"bold"}}> {article} </CardBody>  
        </Card>

        <br/>
        <br/>

        <h5 style={{fontWeight:"bold", color:"white", textAlign:"center"}}> Pour valider votre sélection et recevoir votre journal sur ces structures, entrez l'adresse ou vous souhaitez recevoir :)  </h5>
<div style={{display:"flex", justifyContent:"center", flexDirection:"column" }} >
        <Input onChange={(e) => setEmail(e.target.value)} className="Login-input" placeholder="email" />

        <Button style={{textAlign:"center"}} onClick={() => handleSubmitMail()}>  Valider </Button>
        </div>
  
</div>
    )
}

export default Validation;