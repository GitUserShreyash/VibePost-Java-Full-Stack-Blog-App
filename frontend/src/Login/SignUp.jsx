import './SignUp.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Input } from './Input';

export default function SignUpPage() {
  return (
    <>
      <div className="main-section">
        <div className="log-signup-div">
          <div className="heading">
            <div className="head1">
              <h2>Sign Up</h2>
            </div>
            <p>It's quick and easy</p>
          </div>
          <form action="" className="form">
            <div className="input-div">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="First Name"
                  className="name-input"
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="name-input"
                />
              </div>
              <div className='input-div'>
                <Input></Input>
              </div>
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="password-input"
                />
              </div>
            </div>
            <div className="sign-btn">
              <input type="submit" value="Sign Up" className="sign-in"/>
            </div>
            <div className='text-div'>
              <p>Already have an account?</p>
              <a href='#'>Sign In</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
