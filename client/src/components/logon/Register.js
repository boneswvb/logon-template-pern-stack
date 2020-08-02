import React from 'react';
import './register.css';

function Register({
  fullName,
  email,
  passwordf,
  passwordr,
  handleChangeFullName,
  handleChangeEmail,
  handleChangeP,
  handleChangePr,
  onSubmitForm
}) {

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
                value={fullName.fullName}
                className="form-control"
                placeholder="Full name"
                type="text"
                onChange={handleChangeFullName}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-envelope"></i></span>
              </div>
              <input
                name="email"
                value={email.email}
                className="form-control"
                placeholder="Email address"
                type="email"
                onChange={handleChangeEmail}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
              </div>
              <input
                name="passwordf"
                value={passwordf.passwordf}
                className="form-control"
                placeholder="Create password"
                type="password"
                onChange={handleChangeP}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
              </div>
              <input
                name="passwordr"
                value={passwordr.passwordr}
                className="form-control"
                placeholder="Repeat password"
                type="password"
                onChange={handleChangePr}
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={onSubmitForm}
              >
                Create Account
                </button>
            </div>
          </form>
        </article>
      </div>
    </div>
  );
}

export default Register;
