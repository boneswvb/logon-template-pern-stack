import React, { useState} from 'react';
import Register from '../components/logon/Register';

function RegisterState() {
  //state
  const [ fullName, setFullName] = useState("");
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [ passwordr, setPasswordr] = useState("");

  //handel change of input for the form
  const handleChange = (event) => {
    const {name, value} = event.target
      setFullName({ [name]: value });
      setEmail({ [name]: value });
      setPassword({ [name]: value });
      setPasswordr({ [name]: value });
    };    

  return(
    <Register 
      fullname={ fullName }
      email={ email }
      password={ password }
      passwordr={ passwordr }
			handleChange={ handleChange} />
  )};

export default RegisterState;