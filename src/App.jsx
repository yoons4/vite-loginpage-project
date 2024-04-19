/* eslint-disable react/prop-types */
import { useState, useRef, useEffect} from 'react'
import smile from './assets/image/Smiling_Face_Emoji_grande.webp';
import flagstar from './assets/image/flag-Stars-and-Stripes-May-1-1795.webp';
import './App.css';
import InputText from './components/InputText.jsx';
import IndividualButton from './components/IndividualButton.jsx';

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

  return (
    <div className="App">
      <div className="extra-image">
      <header className="login-header">
        <div>
          <img src={flagstar} className="img-symbol" alt="flag" />
        </div>
        <div>
          This is one of the greatest website in American history!!!!
        </div>
        <div>
          <img src={smile} className="img-symbol" alt="positiveFace" />
        </div>
      </header>
      <div className="container-style">
        <div>
          <div>
            <div className="form-structure">
              <h1 className="header-design">Welcome to the Blossom Website!</h1>
              <form className="form-organization">
                <div className="each-section">
                  <h2 className="header-design">Sign for existing users</h2>
                </div>

                  <div className="each-section">
                    <label htmlFor="new-idemail">
                      <strong>Type Email:</strong>
                    </label>
                    <InputText type="email" id="new-idemail" ref={checkUsername} onChange={(e)=>setUsername(e.target.value)} value={newusername}/>

                  </div>
                  
                  <div className="each-section">
                    <label htmlFor="new-password">
                      <strong>Type Password:</strong>
                    </label>
                    <InputText type="password" id="new-password" ref={checkPassword} onChange={(e)=>setPassword(e.target.value)} value={newpassword}/>
                  </div>

                  <div className="extra-section">
                    <label htmlFor="reveal-password">
                        <input type="checkbox" id="new-password" onClick={ShowPassword} />
                      <strong>Show password:</strong>
                    </label>
                  </div>
                 

                  <div className="each-section">
                    <IndividualButton type="submit" id="btn-signin" value="SignIn" onClick={CheckResult} />
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
