import React from "react";
import companyLogo from "../../src/assets/LOGO-2BR.png";
import { useState } from "react";

function Login(props) {

  const [credentials, setCredentials]=useState({
    username:"",
    password:"" 
  });

  function credChange(event){
    const {name, value}=event.target;
    setCredentials(prevValues => {
        return{
        ...prevValues,
        [name] : value
        };
    });
  }

  function verifyuser(event){
    console.log("Button clicked");
    console.log(credentials.username);
    console.log(credentials.password);
    props.page2(credentials);
    event.preventDefault();
  }

  

  
  return (
    <div className="LoginDiv">
      <div className="Dispcription">
        <h1>Expense Tracker</h1>
        <p>Looking for Tracke the Expenses Efficiently!</p>
        <p>
          This Application will help to not only track but categorize your all
          expenses
        </p>
        <p className="Quote">ENOJY BY EXPORING</p>
      </div>

      <div className="LoginMain">
        <form>
          <img
            class="mb-4"
            src={companyLogo}
            alt=""
            width="200"
          />
          <h1 class="h4 mb-3 fw-small">Please Login</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="username"
              onChange={credChange}
              value={credentials.username}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              onChange={credChange}
              value={credentials.password}
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button class="w-100 btn btn-sm btn-primary" onClick={verifyuser} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
