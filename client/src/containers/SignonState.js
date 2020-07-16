import React, { useState } from 'react';
import Signon from '../components/logon/Signon'

function SignonState() {
  //state
  const [ login, setLogin] = useState("");
  const [ passwordl, setPasswordl] = useState("");

  //handel change of input for the form
  const handleChange = (event) => {
    const {name, value} = event.target
    setLogin({ [name]: value });
    setPasswordl({ [name]: value });
    };
    console.log(login);     
    console.log(passwordl);  

  return(
    <Signon
      login={ login }
      passwordl={ passwordl }
      handleChange={ handleChange }
    />
  )
};

export default SignonState;
