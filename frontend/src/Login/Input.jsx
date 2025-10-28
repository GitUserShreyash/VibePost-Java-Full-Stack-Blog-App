import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
export const Input = ()=>{
    return(
        <>
        <div className="input-wrapper">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <input
                  type="email"
                  placeholder="Enter email"
                  className="email-input"
                />
              </div>
              <div className="input-wrapper">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <input
                  type="password"
                  placeholder="Enter password"
                  className="password-input"
                />
              </div>
        </>
    )
}