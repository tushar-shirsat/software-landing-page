import FooterAddress from "./FooterAddress";
import FooterSubscribeBox from "./FooterSubscribeBox";
import Footer_links from "./Footer_links";
import Footer_web_info from "./Footer_web_info";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="primary-footer">
          <Footer_web_info />
          <Footer_links />
          <FooterAddress />
        </div>
        <div className="subscribe-box">
            <FooterSubscribeBox />
        </div>
        <div className="secondary-footer">
            <p>Copyright 2019 Softino Theme by <u>ThemeHt</u>  | All Rights Reserved </p>      
            <div className="secodary-footer-social-link">
                <ul>
                    <li>
                        <FacebookIcon /> facebook
                    </li>
                    <li>
                        <TwitterIcon /> Twitter
                    </li>
                    <li>
                        <InstagramIcon /> Instagram
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
