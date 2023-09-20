import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

// firebase
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// stylesheet
import "./style/Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

const navigate = useNavigate();
const params = useParams();

const randomNumber = Math.floor(Math.random() * 100) + 1;
const id = randomNumber;
const value = `/gallery/${id}`

  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((useCredential) => {
      console.log(useCredential);
    }).catch((error) => {
      console.error(error);
      console.log(error);
    });

    if (email === "user@example.com" && password === "1Password") {
      navigate(value)
    }else{
      setErrorMessage(true)
    }
  };
  return (
    <div className="login">
      <h1>
        Welcome To <span>RankNFT</span>
      </h1>
      <form onSubmit={handleLogIn}>
        <h3>Log In</h3>
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
        {errorMessage ? <div className="error">Invalid Email or Password</div>: null}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
