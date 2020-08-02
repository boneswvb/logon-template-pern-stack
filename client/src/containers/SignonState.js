import React, { useEffect, useState } from 'react';
import Signon from '../components/logon/Signon'

function SignonState() {
  //state
  const [ login, setLogin] = useState("");
  const [ passwordl, setPasswordl] = useState("");
  const [ users, setUsers ] = useState([]);

  //handel change of input for the form
  const handleChangeLogin = (event) => {
    const {name, value} = event.target
    setLogin({ [name]: value });
    };

    const handleChangePl = (event) => {
    const {name, value} = event.target
    setPasswordl({ [name]: value });
    };

    //Signon checked against database
    //Get user info
    const getUserInfo = async() => {
      try {
        const response = await fetch("http://localhost:5000/logon")
        const jsonData = await response.json()
      
        setUsers(jsonData);

      } catch (err) {
        console.error(err.message)
      }
    };

    useEffect(() => {
      getUserInfo();
    }, []);

    console.log("users", users)

    return(
    <Signon
      login={ login }
      passwordl={ passwordl }
      handleChangeLogin={ handleChangeLogin }
      handleChangePl={ handleChangePl }
    />
  )
};

export default SignonState;
