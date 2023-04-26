import { pageLinks, socialMediaLinks } from "../data";
import logo from "../images/logo.svg";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialMediaLinks.map((link) => {
            return (
              <li>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="nav-icon"
                >
                  <i className={link.text}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
