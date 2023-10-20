import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { auth } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const handleSignup = (e) => {
    // todo: sign up
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        console.error(error);
      });
  };
  return (
    <div className="login">
      <h1>
        Welcome To <span>RankNFT</span>
      </h1>
      <form onSubmit={handleSignup}>
        <h3>Sign Up</h3>
        <div className="inner_form">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            placeholder="Enter Valid Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inner_form">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage ? (
          <div className="error">Invalid Email or Password</div>
        ) : null}
        <button type="submit">Sign Up</button>
      </form>
      <NavLink to="/">login</NavLink>
    </div>
  );
};

export default SignUp;
