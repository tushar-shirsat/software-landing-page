import Image from "next/image";
import {useEffect, useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  
  const [scrollPosition, setPosition] = useState(0);
  const [open,setOpen] = useState(false);
  useEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return (
    <header className="header">
      <div className={scrollPosition>80 && "fixed-header"}>
        <div className="container">
          <Image
            src="http://themeht.com/softino/html/ltr/images/logo-customizer/logo-color-3.png"
            height={70}
            width={300}
            objectFit="contain"
            className="main-logo"
          />
          <div className={`${open? 'nav-links-container open' : "nav-links-container"} `}>
            <ul className="nav-links">
              <li className="links">Home
              <span className="dot"></span>
              </li>
              <li className="links">About
              <span className="dot"></span>
              </li>
              <li className="links">Services
              <span className="dot"></span>
              </li>
              <li className="links">Team
              <span className="dot"></span>
              </li>
              <li className="links">Pricing
                  <span className="dot"></span>
                  </li>
              <li className="links">Blog
              <span className="dot"></span>
              </li>
              <li className="links">Pages +
              <span className="dot"></span>
              </li>
            </ul>
          </div>
          <div className="header-button-container">
            <MenuIcon className="hameburger" onClick={() => setOpen(!open)} style={{fontSize: "40px",cursor: "pointer", color: "#ff512f"}} />
            <button className="login">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
