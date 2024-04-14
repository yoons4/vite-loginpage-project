/* eslint-disable react/prop-types */
import { useState, useRef, useEffect} from 'react'
import smile from './image/Smiling_Face_Emoji_grande.webp';
import flagstar from './image/flag-Stars-and-Stripes-May-1-1795.webp';
import './App.css';
import InputBox from './inputbox.jsx';

function App() {
  const [password, revealPassWord] = useState(true);
  const [newpassword, setPassword] = useState("");
  const [newusername, setUsername] = useState("");
  const checkPassword = useRef(null);
  const checkUsername = useRef(null);

  
  useEffect(() => {
    checkPassword.current = newpassword;
    checkUsername.current = newusername;
  },[newpassword, newusername]);

  const ShowPassword = () => {
    revealPassWord(!password);
    DecidePassword();
  }

  const DecidePassword = () => {
    
    if(password === true){
      document.getElementById("new-password").type = "text";
    } else {
      document.getElementById("new-password").type = "password";
    }
  }

  const CheckResult = () => {
    //const newList = accountlist();
    //let evaluateEntry = false;

    /*
    for(let i = 0; i < newList.length; i++){
      if(checkPassword.current === newList[i].pass && checkUsername.current === newList[i].user){
        evaluateEntry = true;
        break;
      }
    }
    */

    //const submitButton = document.getElementById("btn-signin");
    /*
    if(evaluateEntry === true){
      alert("Welcome!!!!!!");
      submitButton.setAttribute("disabled", "");
    } else {
      alert("Please type correct Id and password.");
    }
    */
    alert("Welcome!!!");
  }

  /*
  const InputBox = forwardRef((props, ref) => {
    return(
      <input type={props.type} id={props.id} value={props.value} onChange={props.onChange} ref={ref} />
    )
  });
  */

  const InputButton = (props) => {
    return(
      <input type={props.type} id={props.id} onClick={ShowPassword} />
    )
  }

  const SubmitButton = (props) => {
    return(
      <button type={props.type} id={props.id} onClick={CheckResult}>SignIn</button>
    )
  }


  return (
    <div className="App">
      <header className="login-header">
        <div>
          <img src={flagstar} alt="flag" />
        </div>
        <div>
          This is one of the greatest website in American history!!!!
        </div>
        <div>
          <img src={smile} alt="positiveFace" />
        </div>
      </header>

      <div className="add-image">

      </div>

      <div className="add-background"></div>

      <div className="container">
        <div>
          <div>
            <div className="organize-form">
              <h1>Welcome to the Blossom Website!</h1>
              <form>
                <div className="each-section">
                  <h2>Sign for existing users</h2>
                </div>

                  <div className="each-section">
                    <label htmlFor="new-idemail">
                      <strong>Type Email:</strong>
                    </label>
                    <InputBox type="email" id="new-idemail" ref={checkUsername} onChange={(e)=>setUsername(e.target.value)} value={newusername}/>

                  </div>
                  
                  <div className="each-section">
                    <label htmlFor="new-password">
                      <strong>Type Password:</strong>
                    </label>
                    <InputBox type="password" id="new-password" ref={checkPassword} onChange={(e)=>setPassword(e.target.value)} value={newpassword}/>
                  </div>

                  <div className="each-section2">
                    <label htmlFor="reveal-password">
                      <InputButton type="checkbox" id="reveal-password" />
                      <strong>Show password:</strong>
                    </label>
                  </div>
                 

                  <div className="each-section">
                    <SubmitButton type="button" id="btn-signin" />
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
