// stylesheet
import "./style/Login.scss";

const Login = () => {
  return (
    <div className='login'>
        <h1>Welcome To <span>RankNFT</span></h1>
        <form action="">
            <h3>Log In</h3>
            <div className="inner_form">
                <label htmlFor="">Username:</label>
                <input type="text" placeholder='Enter Username'/>
            </div>
            <div className="inner_form">
                <label htmlFor="">Password:</label>
                <input type="password" placeholder='Enter Password'/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login