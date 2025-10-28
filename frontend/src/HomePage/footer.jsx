import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    // set fixed height and expose --footer-height so sidebar can stop above footer
    <footer
      className=" py-2 px-3 flex items-center justify-between flex-col"
    >
      <p className="text-xs">© 2025 vibePost</p>
      <div className="flex items-center space-x-3">
        <a
          href="https://www.instagram.com/shreyash_ambure/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-pink-500  hover:text-pink-400"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.facebook.com/shreyash_ambure/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-blue-500  hover:text-blue-400"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.linkedin.com/in/shreyash-ambure/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-500 hover:text-blue-400"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
};
