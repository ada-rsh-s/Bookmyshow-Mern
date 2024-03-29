import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useAppContext } from "../context/appContext";
const Loginemail = () => {
  const {
    toggleEmailLogin,
    loginUser,
    toggleWaitOtp,
    waitOtp,
    emailError,
    toggleEmailError,
  } = useAppContext();

  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (email) {
      loginUser(email);
      if (emailError == true) {
        toggleEmailError()
      }
      toggleWaitOtp();
    } else console.log("Nothing");
  };
  return (
    <div className="emailLogin">
      <svg
        onClick={toggleEmailLogin}
        width="16"
        height="13"
        viewBox="0 0 100 100"
      >
        <title>Go back</title>
        <path
          d="M72.7,0c1.9,0.1,3.6,1.2,4.6,3.3s0.7,4.2-0.8,6.1c-0.2,0.2-0.4,0.4-0.6,0.6c-5.1,5.1-10.2,10.2-15.3,15.4
c-7,7-13.9,14-20.9,21c-2.2,2.2-2.2,5.2,0,7.4C51.8,65.9,63.8,77.9,75.9,90c1.3,1.3,2.1,2.7,2.1,4.5c-0.1,2.3-1.2,4.1-3.3,5
c-2.1,1-4.1,0.6-5.9-0.8c-0.3-0.2-0.5-0.5-0.8-0.7C53.2,83.2,38.5,68.5,23.8,53.8c-2.4-2.4-2.3-5.2,0-7.6c4-4,7.9-8,11.9-12
C44.5,25.4,53.3,16.6,62,7.8c2-2,4-4,6-6C69.2,0.7,70.6,0,72.7,0z"
        ></path>
      </svg>
      <h2>Login with Email</h2>
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      {waitOtp && <p className="alert">Validating your email ⌛....</p>}
      {emailError && <p className="alert error">Please enter a valid email</p>}
      <center>
        <div className="signin">
          <Button onClick={submitForm}>Continue</Button>
        </div>
      </center>
    </div>
  );
};

export default Loginemail;
