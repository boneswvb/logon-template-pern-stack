import React, { useState } from 'react';
import RegisterState from '../containers/RegisterState';
import SignonState from '../containers/SignonState';
import './menu.css';

function Menu() {
  //state 
  const [register, setRegister] = useState(false);
  const [signon, setSignon] = useState(false);

  //change register state on click - register button on menu line
  const displayRegister = () => {
    return (
      setRegister(prevState => !register)
    )
  };

  //change logon state on click - register button on menu line
  const displaySignon = () => {
    return (
      setSignon(prevState => !signon)
    )
  };

  return (
    <div>
      <div className="right">
        <div className="right1">
          <p className="right2" onClick={displaySignon}>Logon</p>
          <p className="right2" onClick={displayRegister}>Register</p>
        </div>
      </div>
      <div className="menu">
        <p className="menuItem">Place Holder</p>
        <p className="menuItem">Place Holder</p>
      </div>
      <div>
        {
          register ? <RegisterState /> : null
        }
        {
          signon ? <SignonState /> : null
        }
      </div>
    </div>
  );
}

export default Menu;
