import './signIn.css' 
import { Link } from 'react-router-dom';
import { Input } from './Input';

export default function SignInPage() {
  return (
    <>
      <div className="main-section">
        <div className="log-div">
          <div className="heading">
            <div className="head1">
              <h2>Lets</h2>
            </div>
            <div className="head2">
              <h2>Start Learning</h2>
            </div>
            <p>Please login or signup to continue</p>
          </div>
          <form action="" className="form" onSubmit={e => e.preventDefault()}>
            <div className="input-div">
              <Input></Input>
            </div>
            <div className="sign-btn">
              <input type="submit" value="Sign In" className="sign-in"/>
            </div>
            <div className='text-div'>
              <p >Don't have an account?</p>
              
              <Link to="/SignUp">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
