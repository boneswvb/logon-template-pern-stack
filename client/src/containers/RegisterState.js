import React, { useState } from 'react';
import Register from '../components/logon/Register';

function RegisterState() {
  //state
  const [fullName, setFullName] = useState({});
  const [email, setEmail] = useState({ email: "" });
  const [passwordf, setPasswordf] = useState({ passwordf: "" });
  const [passwordr, setPasswordr] = useState({ passwordr: "" });

  //handel change of input for the form
  const handleChangeFullName = (event) => {
    const { name, value } = event.target
    setFullName({ [name]: value });
  };
  
  const handleChangeEmail = (event) => {
    const { name, value } = event.target
    setEmail({ [name]: value });
  };

  const handleChangeP = (event) => {
    const { name, value } = event.target
    setPasswordf({ [name]: value });
  };

  const handleChangePr = (event) => {
    const { name, value } = event.target
    setPasswordr({ [name]: value });
  };    

  console.log("Full Name", fullName);

  const onSubmitForm = (e) => {
    e.preventDefault();
    try {
      const body = { fullName, email, passwordf, passwordr };
      const response = fetch("http://localhost:5000/logon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/";
      console.log(response);
    } catch (err) {
      console.error(err.message)
    }
  }
  
  return (
    <Register
      fullName={ fullName }
      email={ email }
      passwordf={ passwordf }
      passwordr={ passwordr }
      handleChangeFullName={ handleChangeFullName } 
      handleChangeEmail={ handleChangeEmail } 
      handleChangeP={ handleChangeP }  
      handleChangePr={ handleChangePr } 
      onSubmitForm={ onSubmitForm }
    />
  )
};

export default RegisterState;