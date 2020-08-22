import React, { useEffect, useState } from 'react';
import Signon from '../components/logon/Signon';
import UserProfile from '../pages/UserProfile';

function SignonState() {
  //state
  const [login, setLogin] = useState("");
  const [passwordl, setPasswordl] = useState("");
  const [user, setUser] = useState({});
  let [isSignedOn, setIsSignedOn] = useState(false);

  //handel change of input for the form
  const handleChangeLogin = (event) => {
    const { name, value } = event.target
    setLogin({ [name]: value });
  };

  const handleChangePl = (event) => {
    const { name, value } = event.target
    setPasswordl({ [name]: value });
  };

  //Signon checked against database
  //Get user info and sore in userInfo to be used for delete profile
  const getUserInfo = async () => {
    try {
      const response = await fetch("http://localhost:5000/logon")
      const jsonData = await response.json()

      const dBData = jsonData.map(data => {
        if (login.login === data.email && passwordl.passwordl === data.passwordf) {
          setUser(data);
          setIsSignedOn(true);
        } else {
          console.log("not working");
        }
        return (dBData)
      })
    } catch (err) {
      console.error(err.message)
    }
  };
  console.log("user", user)
  console.log("isSignedOn", user)

  useEffect(() => {
   
  }, []);

  return (
    <div>
      {
        isSignedOn
          ?
          <UserProfile />
          :
          <Signon
            login={login}
            passwordl={passwordl}
            handleChangeLogin={handleChangeLogin}
            handleChangePl={handleChangePl}
            getUserInfo={getUserInfo}
          />
      }
    </div>
  )
};

export default SignonState;
