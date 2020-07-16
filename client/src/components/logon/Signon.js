import React from 'react';
import './signon.css';

function Signon({ login, passwordl, handleChange}) {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img src="#" id="icon" alt="User Icon" />
        </div>
        <form>
          <input 
            name="login" 
            type="text" 
            id="login" 
            className="fadeIn second" 
            placeholder="Email Adress"
            login={ login}
            onChange={ handleChange } 
          />
          <input 
            name="passwordl" 
            type="text" 
            id="password" 
            className="fadeIn third" 
            placeholder="password" 
            passwordl={ passwordl }
            onChange={ handleChange }
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
      </div>
    </div>
  );
}

export default Signon;