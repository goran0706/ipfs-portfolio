import { Link } from "react-scroll";
import { links } from "./navbar.data";
import { Logo } from "..";

export default function Navbar() {
  return (
    <header className="container">
      <nav className="navbar" aria-label="Navigation Bar">
        <div className="navbar__brand">
          <Logo path="/" />
        </div>
        <div className="navbar__list">
          {links.map(({ path, label }, i) => (
            <Link
              className="navbar__item"
              key={i}
              activeClass="active"
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
