import React, {useState, useEffect} from 'react';
import { Redirect, useParams } from 'react-router-dom';

import './App.css';

function Validation () {
   
  const  [revoir, setRevoir] = useState(false)


  var submit = () => {
setRevoir(true)
  }
  if (revoir==true){
      return ( <Redirect to="/" ></Redirect>)
  } else {
    return (
<div>
   
  <h3 onClick={() => submit()} >  Go to Account page </h3>
</div>
    )
}}

export default Validation;