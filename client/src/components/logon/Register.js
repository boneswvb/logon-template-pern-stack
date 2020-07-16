import React from 'react';
import './register.css';

function Register({ fullname,email, password, passwordr, handleChange}) {
  return (
    <div className="container">
      <div className="card bg-light">
        <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
          <h4 className="card-title mt-3 text-center">Create Account</h4>
          <form>
          <div className="form-group input-group">
            <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-user"></i></span>
            </div>
                <input 
                  name="fullName" 
                  className="form-control" 
                  placeholder="Full name" 
                  type="text" 
                  fullname={ fullname } 
                  onChange={ handleChange }
                />
            </div> 
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-envelope"></i></span>
            </div>
                <input 
                  name="email" 
                  className="form-control" 
                  placeholder="Email address" 
                  type="email" 
                  email={ email } 
                  onChange={ handleChange }
                />
            </div> 
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
            </div>
                <input 
                  name="password"
                  className="form-control" 
                  placeholder="Create password" 
                  type="password" 
                  password={ password } 
                  onChange={ handleChange }
                />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
            </div>
                <input 
                  name="passwordr"
                  className="form-control" 
                  placeholder="Repeat password" 
                  type="password" 
                  passwordr={ passwordr } 
                  onChange={ handleChange }
                />
            </div>                                     
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Create Account</button>
            </div>                                                                    
        </form>
        </article>
        </div>
      </div> 
  );
}

export default Register;
