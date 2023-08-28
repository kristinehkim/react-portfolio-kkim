import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';

function Footer() {
    return (
      <footer className="footer">
        <div className="icon-links">
          <a href="https://www.linkedin.com/in/kristinehkim/">
            <LinkedIn />
          </a>
          <a href="https://github.com/kristinehkim">
            <GitHub />
          </a>
          <a href="https://twitter.com/kristinehkim">
            <Twitter />
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;